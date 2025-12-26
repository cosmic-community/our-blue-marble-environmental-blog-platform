import { cosmic, hasStatus } from '@/lib/cosmic'
import { Post, Category } from '@/types'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'

async function getPosts(): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const posts = response.objects as Post[]
    
    // Manual sorting by published_date (newest first)
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || '').getTime()
      const dateB = new Date(b.metadata?.published_date || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch posts')
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug'])
    
    return response.objects as Category[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}

export default async function Home() {
  const posts = await getPosts()
  const categories = await getCategories()

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Our Blue Marble
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Thoughts and images from our amazing planet
        </p>
      </div>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="mb-12">
          <CategoryFilter categories={categories} />
        </div>
      )}

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">No posts found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}