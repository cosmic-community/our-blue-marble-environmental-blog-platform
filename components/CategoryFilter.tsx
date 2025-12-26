'use client'

import Link from 'next/link'
import { Category } from '@/types'
import { usePathname } from 'next/navigation'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const pathname = usePathname()

  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Link
        href="/"
        className={`px-4 py-2 rounded-full transition-colors ${
          pathname === '/'
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All Posts
      </Link>
      {categories.map((category) => {
        const isActive = pathname === `/categories/${category.slug}`
        return (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className={`px-4 py-2 rounded-full transition-colors ${
              isActive
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.title}
          </Link>
        )
      })}
    </div>
  )
}