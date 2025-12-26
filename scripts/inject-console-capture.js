const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(process.cwd(), '.next', 'standalone', 'out');
const SCRIPT_PATH = '/dashboard-console-capture.js';

function injectScript(htmlContent) {
  const scriptTag = `<script src="${SCRIPT_PATH}"></script>`;
  
  if (htmlContent.includes(scriptTag)) {
    return htmlContent;
  }
  
  return htmlContent.replace('</head>', `${scriptTag}\n</head>`);
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist, skipping injection`);
    return;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const injectedContent = injectScript(content);
      
      if (content !== injectedContent) {
        fs.writeFileSync(filePath, injectedContent);
        console.log(`Injected console capture script into ${filePath}`);
      }
    }
  });
}

console.log('Starting console capture script injection...');
processDirectory(OUT_DIR);
console.log('Console capture script injection complete');