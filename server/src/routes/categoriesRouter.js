import { Router } from 'express'
import * as categoriesController from '../controllers/categoriesController.js'
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
  categoriesController.getCategories
)

router.get(
  '/:id',
  getSingleCategoryValidators,
  validationErrorHandler,
  categoriesController.getCategoryById
)

export default router
