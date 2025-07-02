import { Router } from 'express'
import * as CategoriesController from '../controllers/categoriesController.js'
import validationErrorHandler from '../middlewares/validationErrorHandler.js'
import {
  getCategoriesValidators,
  getSingleCategoryValidators,
} from '../middlewares/categoryValidators.js'

const router = Router()

router.get(
  '/',
  getCategoriesValidators,
  validationErrorHandler,
  CategoriesController.getCategories
)

router.get(
  '/:id',
  getSingleCategoryValidators,
  validationErrorHandler,
  CategoriesController.getCategoryById
)

export default router
