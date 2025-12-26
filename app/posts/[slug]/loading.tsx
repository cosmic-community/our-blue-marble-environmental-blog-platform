// app/posts/[slug]/loading.tsx
export default function PostLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="animate-pulse">
        <div className="h-8 w-32 bg-gray-200 rounded mb-8"></div>
        <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  )
}