import pg from 'pg'
import { Sequelize } from 'sequelize'
import { DATABASE_URL, DB_DIALECT } from '../config/config.js'

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: DB_DIALECT,
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
})

export default sequelize
