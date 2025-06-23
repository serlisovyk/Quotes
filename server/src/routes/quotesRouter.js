import { Router } from 'express'
import * as quotesController from '../controllers/quotesController.js'
import validationErrorHandler from '../middlewares/validationErrorHandler.js'
import {
  getQuotesValidators,
  postQuoteValidators,
  getRandomQuotesValidators,
  deleteSingleQuoteValidators,
  getSingleQuoteValidators,
  patchSingleQuoteValidators,
} from '../middlewares/quoteValidators.js'

const router = Router()

router.get(
  '/',
  getQuotesValidators,
  validationErrorHandler,
  quotesController.getQuotes
)

router.post(
  '/',
  postQuoteValidators,
  validationErrorHandler,
  quotesController.postQuote
)

router.get(
  '/random',
  getRandomQuotesValidators,
  validationErrorHandler,
  quotesController.getRandomQuotes
)

router.get(
  '/:id',
  getSingleQuoteValidators,
  validationErrorHandler,
  quotesController.getQuoteById
)

router.delete(
  '/:id',
  deleteSingleQuoteValidators,
  validationErrorHandler,
  quotesController.deleteQuoteById
)

router.patch(
  '/:id',
  patchSingleQuoteValidators,
  validationErrorHandler,
  quotesController.patchQuoteById
)

export default router
