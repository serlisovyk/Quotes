import { Sequelize } from 'sequelize'
import { DB } from './config.js'

const sequelize = new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, {
  dialect: DB.DIALECT,
  host: DB.HOST,
  port: DB.PORT,
  logging: false,
})

export default sequelize
