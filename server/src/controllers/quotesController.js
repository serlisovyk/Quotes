import asyncErrorHandler from '../utils/asyncErrorHandler.js'
import { DEFAULT_QUOTES_LIMIT, RANDOM_QUOTES_LIMIT } from '../constants/constants.js'
import {
  findQuotes,
  findRandomQuotes,
  findSingleQuote,
  createQuote,
  deleteSingleQuote,
  modifySingleQuote,
} from '../services/quotesService.js'

export const getQuotes = asyncErrorHandler(async (req, res) => {
  const {
    text,
    author,
    category,
    limit = DEFAULT_QUOTES_LIMIT,
    offset = 0,
  } = req.query
  const quotes = await findQuotes({ limit, offset, author, text, category })
  res.json(quotes)
})

export const getRandomQuotes = asyncErrorHandler(async (req, res) => {
  const { limit = RANDOM_QUOTES_LIMIT } = req.query
  const quotes = await findRandomQuotes(limit)
  res.json(quotes)
})

export const getQuoteById = asyncErrorHandler(async (req, res) => {
  const quoteId = req.params.id
  const quote = await findSingleQuote(quoteId)
  if (quote) {
    res.json(quote)
  } else {
    res.status(404).json({ message: `Quote with ID ${quoteId} not found` })
  }
})

export const deleteQuoteById = asyncErrorHandler(async (req, res) => {
  const quoteId = req.params.id
  const deletedQuoteId = await deleteSingleQuote(quoteId)
  if (deletedQuoteId) {
    res.status(204).send()
  } else {
    res.status(404).json({ message: `Quote with ID ${quoteId} not found` })
  }
})

export const patchQuoteById = asyncErrorHandler(async (req, res) => {
  const quoteId = req.params.id
  const { text, author, categories } = req.body
  const updateData = { text, author, categories }
  const modifiedQuote = await modifySingleQuote(quoteId, updateData)
  if (modifiedQuote) {
    res.json(modifiedQuote)
  } else {
    res.status(404).json({ message: `Quote with ID ${quoteId} not found` })
  }
})

export const postQuote = asyncErrorHandler(async (req, res) => {
  const { text, author, categories } = req.body
  const quote = await createQuote({ text, author, categories })
  res.status(200).json(quote)
})
