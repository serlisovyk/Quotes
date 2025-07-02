import { Router } from 'express'
import * as QuotesController from '../controllers/quotesController.js'
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
  QuotesController.getQuotes
)

router.get(
  '/:id',
  getSingleQuoteValidators,
  validationErrorHandler,
  QuotesController.getQuoteById
)

router.get(
  '/random',
  getRandomQuotesValidators,
  validationErrorHandler,
  QuotesController.getRandomQuotes
)

router.post(
  '/',
  postQuoteValidators,
  validationErrorHandler,
  QuotesController.postQuote
)

router.patch(
  '/:id',
  patchSingleQuoteValidators,
  validationErrorHandler,
  QuotesController.patchQuoteById
)

router.delete(
  '/:id',
  deleteSingleQuoteValidators,
  validationErrorHandler,
  QuotesController.deleteQuoteById
)

export default router
