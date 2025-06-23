import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'
import QuoteCategory from './QuoteCategory.js'
import Category from './Category.js'

const afterFind = (results) => {
  if (results) {
    const quotes = Array.isArray(results) ? results : [results]

    quotes.forEach((quote) => {
      if (quote.Categories) {
        quote.dataValues.categories = quote.Categories.map(
          (category) => category.name
        )
        delete quote.dataValues.Categories
      }
    })
  }
}

const Quote = sequelize.define(
  'Quote',
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  { afterFind }
)

Quote.belongsToMany(Category, { through: QuoteCategory })
Category.belongsToMany(Quote, { through: QuoteCategory })

export default Quote
