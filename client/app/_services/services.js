import { toast } from 'react-toastify'
import fetcher from 'app/_services/fetcher'
import { QUOTES_API_ENDPOINT, RANDOM_QUOTES_API_ENDPOINT } from '@config/constants'
import { getSingleQuoteApiEndpoint } from '@utils/utils'
import { isQuoteFormValid, isQuoteValidId } from '@utils/validation'

export const findRandomQuotes = async ({ setQuotes, setIsLoading }) => {
  setIsLoading(true)
  const data = await fetcher.get(RANDOM_QUOTES_API_ENDPOINT)
  if (data) setQuotes(data)
  setIsLoading(false)
}

export const findQuotes = async ({ setQuotes, setIsLoading, queryParams = {} }) => {
  setIsLoading(true)
  const data = await fetcher.get(QUOTES_API_ENDPOINT, queryParams)
  if (data) setQuotes(data)
  setIsLoading(false)
}

export const findQuoteById = async ({ id, setData, setIsLoading, formatData }) => {
  if (!isQuoteValidId(id)) {
    toast.error(
      `Invalid quote ID ${id}. It must be an integer in the range 1..2147483647.`
    )
    setIsLoading(false)
    return
  }

  const data = await fetcher.get(getSingleQuoteApiEndpoint(id))

  if (data) {
    const formattedData = formatData ? formatData(data) : data
    setData(formattedData)
  }

  setIsLoading(false)
}

export const deleteQuoteById = async ({ id, router }) => {
  if (await fetcher.delete(getSingleQuoteApiEndpoint(id))) {
    toast.success(`Quote with id ${id} was successfully deleted!`)
    setTimeout(() => router.push('/'), 2000)
  }
}

const handleQuoteForm = async ({
  method,
  formValues,
  setValidationErrors,
  router,
  quoteId,
}) => {
  const SINGLE_QUOTE_API_ENDPOINT = `${QUOTES_API_ENDPOINT}/${quoteId}`

  if (!isQuoteFormValid({ values: formValues, setValidationErrors })) {
    return
  }

  const { text, author, categories } = formValues
  const payload = {
    text,
    author,
    categories: categories.split(',').map((category) => category.trim()),
  }

  let data

  if (method === 'POST') data = await fetcher.post(QUOTES_API_ENDPOINT, payload)
  if (method === 'PATCH')
    data = await fetcher.patch(SINGLE_QUOTE_API_ENDPOINT, payload)

  if (data) {
    toast.success(`Quote ${method === 'POST' ? 'created' : 'updated'} successfully!`)
    router.push(`/quotes/${quoteId || data.id}`)
  }
}

export const createQuote = ({ formValues, setValidationErrors, router }) => {
  const method = 'POST'
  handleQuoteForm({ method, formValues, setValidationErrors, router })
}

export const editQuote = ({ quoteId, formValues, setValidationErrors, router }) => {
  const method = 'PATCH'
  handleQuoteForm({
    method,
    formValues,
    setValidationErrors,
    router,
    quoteId,
  })
}
