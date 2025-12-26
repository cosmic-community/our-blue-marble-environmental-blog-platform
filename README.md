# Our Blue Marble - Environmental Blog Platform

![App Preview](https://imgix.cosmicjs.com/bab6b030-ff1e-11ed-8fca-9b0db64c9b86-nasa-vhSz50AaFAs-unsplash.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive environmental blog platform built with Next.js 16 and powered by Cosmic CMS. This application showcases articles about our planet's natural wonders, biodiversity, climate, and environmental topics.

## Features

- 🌍 Dynamic blog posts with rich HTML content and hero images
- 📂 Category-based filtering (Climate, Environment, Ecology, Exploring, Deep Thoughts)
- 👤 Author profiles with images and attribution
- 📱 Fully responsive design for mobile, tablet, and desktop
- ⚡ Built with Next.js 16 App Router for optimal performance
- 🖼️ Automatic image optimization using imgix
- 🎨 Clean, nature-inspired design with calming color palette
- ♿ Accessible and SEO-optimized

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=694ebf266d538c4d2c70f851&clone_repository=694ec8b86d538c4d2c70f8b2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 16.0.7 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Runtime**: Bun
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with bucket access
- Node.js 18+ (for compatibility)

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching All Posts

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Post by Slug

```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'post-slug' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Categories

```typescript
const { objects: categories } = await cosmic.objects
  .find({ type: 'categories' })
  .props(['id', 'title', 'slug'])
```

### Fetching Global Settings

```typescript
const { object: globals } = await cosmic.objects
  .findOne({ type: 'globals' })
  .props(['id', 'metadata'])
```

## Cosmic CMS Integration

This application uses the following Cosmic content structure:

### Object Types

- **Posts** - Blog posts with hero images, content, teaser, author, published date, and categories
- **Authors** - Author profiles with images
- **Categories** - Post categories for filtering
- **Globals** - Site-wide settings (site title and tagline)

### Metafields

Posts include:
- `hero` (file) - Hero image
- `content` (html-textarea) - Full article content
- `teaser` (html-textarea) - Article excerpt
- `author` (object) - Connected author object
- `published_date` (date) - Publication date
- `categories` (objects) - Connected category objects

Authors include:
- `image` (file) - Author profile image

Globals include:
- `site_title` (text) - Website title
- `site_tag` (text) - Website tagline

## Deployment Options

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository into Vercel
3. Add your environment variables in the Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Add your environment variables in the Netlify dashboard
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

<!-- README_END -->