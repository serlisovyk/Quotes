import 'dotenv-flow/config'

export const APP_PORT = process.env.APP_PORT

export const CSV_IMPORT_BATCH_SIZE = process.env.CSV_IMPORT_BATCH_SIZE
export const CSV_IMPORT_BATCH_TIMEOUT = process.env.CSV_IMPORT_BATCH_TIMEOUT

export const DB = {
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  DIALECT: process.env.DB_DIALECT,
}
