import asyncErrorHandler from '../utils/asyncErrorHandler.js'
import { findCategories, findSingleCategory } from '../services/categoriesService.js'

export const getCategories = asyncErrorHandler(async (req, res) => {
  const { limit = 10, offset = 0, name } = req.query
  const categories = await findCategories({ limit, offset, name })
  res.json(categories)
})

export const getCategoryById = asyncErrorHandler(async (req, res) => {
  const categoryId = req.params.id
  const category = await findSingleCategory(categoryId)
  if (category) {
    res.json(category)
  } else {
    const error = { message: `Category with ID ${categoryId} not found` }
    res.status(404).json(error)
  }
})
