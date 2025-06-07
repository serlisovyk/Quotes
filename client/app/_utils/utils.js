import { MAX_VISIBLE_CATEGORIES } from '@config/constants'

export function highlightText(text, searchText) {
  if (!searchText || searchText.length < 3) return text

  const parts = text.split(new RegExp(`(${searchText})`, 'gi'))

  return parts.map((part, index) => {
    if (part.toLowerCase() === searchText.toLowerCase()) {
      return (
        <span
          key={index}
          className="bg-yellow-300 dark:bg-yellow-200 dark:text-gray-800 -m-0.5 p-0.5"
        >
          {part}
        </span>
      )
    }
    return part
  })
}

export function getDisplayedCategories(categories, selectedCategory) {
  const visible = categories.slice(0, MAX_VISIBLE_CATEGORIES)

  if (!selectedCategory || visible.includes(selectedCategory)) {
    return visible
  }

  if (categories.includes(selectedCategory)) {
    return [...visible.slice(0, -1), selectedCategory]
  }

  return visible
}
