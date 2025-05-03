export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const ALLOWED_SEARCH_PARAM_NAMES = [
  'text',
  'author',
  'category',
  'limit',
  'offset',
]

export const menuItems = [
  { href: '/', text: 'Random' },
  { href: '/search', text: 'Search' },
  { href: '/quotes/create', text: 'Create New' },
]

export const MAX_VISIBLE_CATEGORIES = 10

export const MAX_VISIBLE_TEXT_LENGTH = 200
