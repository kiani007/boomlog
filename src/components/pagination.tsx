'use client'
import { useState } from 'react'
import Link from 'next/link'

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  const [page, setPage] = useState(currentPage)

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  return (
    <nav className="flex items-center justify-between">
      <Link href={`/posts/${page - 1}`}>
        <button
          className="px-4 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
          onClick={handlePrev}
          disabled={page === 1}
        >
          Prev
        </button>
      </Link>
      <span>
        Page {page} of {totalPages}
      </span>
      <Link href={`/posts/${page + 1}`}>
        <button
          className="px-4 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </Link>
    </nav>
  )
}
