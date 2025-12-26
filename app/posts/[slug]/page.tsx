// app/posts/[slug]/page.tsx
import { cosmic, hasStatus } from '@/lib/cosmic'
import { Post } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'posts', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Post
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch post')
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const heroImage = post.metadata?.hero?.imgix_url
  const content = post.metadata?.content
  const author = post.metadata?.author
  const publishedDate = post.metadata?.published_date
  const categories = post.metadata?.categories || []

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to posts
      </Link>

      {/* Hero Image */}
      {heroImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={`${heroImage}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          {author && (
            <div className="flex items-center gap-2">
              {author.metadata?.image?.imgix_url && (
                <img 
                  src={`${author.metadata.image.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={author.title}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="font-medium">{author.title}</span>
            </div>
          )}
          {publishedDate && (
            <time className="text-sm">
              {new Date(publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <span 
                key={category.id}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Post Content */}
      {content && (
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  )
}