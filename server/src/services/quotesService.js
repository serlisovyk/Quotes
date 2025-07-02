import { Op } from 'sequelize'
import sequelize from '../config/db.js'
import Quote from '../models/Quote.js'
import Category from '../models/Category.js'
import { attributes } from '../constants/constants.js'

const includeCategoryConfig = {
  model: Category,
  attributes: ['name'],
  through: { attributes: [] },
}

export const findQuotes = async ({ limit, offset, author, text, category }) => {
  const whereClause = {}
  if (author) whereClause.author = { [Op.iLike]: `%${author}%` }
  if (text) whereClause.text = { [Op.iLike]: `%${text}%` }

  const quotes = await Quote.findAll({
    attributes,
    limit,
    offset,
    order: [['id', 'ASC']],
    include: {
      ...includeCategoryConfig,
      where: category ? { name: category } : {},
    },
    where: whereClause,
  })

  if (!category) {
    return quotes
  } else {
    const quotesIds = quotes.map((quote) => quote.id)

    const quotesByIds = await Quote.findAll({
      attributes,
      order: [['id', 'ASC']],
      include: includeCategoryConfig,
      where: { id: quotesIds },
    })

    return quotesByIds
  }
}

export const findRandomQuotes = async (limit) =>
  await Quote.findAll({
    attributes,
    limit,
    order: sequelize.random(),
    include: includeCategoryConfig,
  })

export const findSingleQuote = async (id) =>
  await Quote.findByPk(id, { attributes, include: includeCategoryConfig })

export const deleteSingleQuote = async (id) => {
  const count = await Quote.destroy({ where: { id } })
  if (count) return id
}

export const createQuote = async ({ text, author, categories }) => {
  const createdQuoteId = await sequelize.transaction(async (t) => {
    const quote = await Quote.create({ text, author }, { transaction: t })

    const categoryInstances = await findOrCreateCategories(categories, t)
    await quote.setCategories(categoryInstances, { transaction: t })

    return quote.id
  })

  return await findSingleQuote(createdQuoteId)
}

export const modifySingleQuote = async (id, { text, author, categories }) => {
  const modifiedQuoteId = await sequelize.transaction(async (t) => {
    const quote = await Quote.findByPk(id, { transaction: t })

    if (!quote) return null

    if (text) quote.text = text
    if (author) quote.author = author

    await quote.save({ transaction: t })

    if (categories) {
      const categoryInstances = await findOrCreateCategories(categories, t)
      await quote.setCategories(categoryInstances, { transaction: t })
    }

    return quote.id
  })

  return await findSingleQuote(modifiedQuoteId)
}

async function findOrCreateCategories(categoryNames, transaction) {
  return await Promise.all(
    categoryNames.map((name) =>
      Category.findOrCreate({
        where: { name },
        transaction,
      }).then(([category]) => category)
    )
  )
}
