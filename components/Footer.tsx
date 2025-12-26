export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Our Blue Marble</h3>
            <p className="text-gray-400">
              Exploring and celebrating the natural wonders of our amazing planet.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Cosmic Docs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-gray-400">
              Powered by{' '}
              <a 
                href="https://www.cosmicjs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                Cosmic
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Our Blue Marble. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}