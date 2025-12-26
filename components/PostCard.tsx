import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const heroImage = post.metadata?.hero?.imgix_url
  const teaser = post.metadata?.teaser
  const author = post.metadata?.author
  const publishedDate = post.metadata?.published_date
  const categories = post.metadata?.categories || []

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/posts/${post.slug}`}>
        {heroImage && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={`${heroImage}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </Link>

      <div className="p-6">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
              >
                {category.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>

        {/* Teaser */}
        {teaser && (
          <div 
            className="text-gray-600 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: teaser }}
          />
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
          {author && (
            <div className="flex items-center gap-2">
              {author.metadata?.image?.imgix_url && (
                <img 
                  src={`${author.metadata.image.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={author.title}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span>{author.title}</span>
            </div>
          )}
          {publishedDate && (
            <time>
              {new Date(publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          )}
        </div>
      </div>
    </article>
  )
}