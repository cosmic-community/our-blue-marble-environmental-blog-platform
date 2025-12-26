import Link from 'next/link'
import { cosmic, hasStatus } from '@/lib/cosmic'
import { Globals } from '@/types'

async function getGlobals(): Promise<Globals | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'globals' })
      .props(['id', 'metadata'])
    
    return response.object as Globals
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    return null
  }
}

export default async function Header() {
  const globals = await getGlobals()
  const siteTitle = globals?.metadata?.site_title || 'Our Blue Marble'
  const siteTag = globals?.metadata?.site_tag || 'Thoughts and images from our amazing planet'

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <Link href="/" className="block hover:opacity-90 transition-opacity">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{siteTitle}</h1>
          <p className="text-white/90">{siteTag}</p>
        </Link>
      </div>
    </header>
  )
}