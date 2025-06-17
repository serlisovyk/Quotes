export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const ALLOWED_SEARCH_PARAM_NAMES = [
  'text',
  'author',
  'category',
  'limit',
  'offset',
]

export const INITIAL_FORM_VALUES = {
  text: '',
  author: '',
  categories: '',
}

export const INITIAL_SEARCH_VALUES = {
  text: '',
  author: '',
  category: '',
  limit: '',
  offset: '',
}

export const menuItems = [
  { href: '/', text: 'Random' },
  { href: '/search', text: 'Search' },
  { href: '/quotes/create', text: 'Create New' },
]

export const CATEGORY_NAME_REGEX = /^[a-z0-9\-]+$/

export const QUOTES_API_ENDPOINT = 'quotes'

export const RANDOM_QUOTES_API_ENDPOINT = 'quotes/random'

export const MAX_VISIBLE_CATEGORIES = 10

export const MAX_VISIBLE_TEXT_LENGTH = 200
