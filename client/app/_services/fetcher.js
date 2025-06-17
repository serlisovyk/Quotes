import { toast } from 'react-toastify'
import { API_URL } from '@config/constants'
import { handleErrors } from 'app/_services/fetcherErrorsHandler'
import { createSearchQueryString } from '@utils/queryString'

const request = async (method, endpoint, payload = null, queryParams = {}) => {
  try {
    const queryString = createSearchQueryString(queryParams)
    const url = queryString
      ? `${API_URL}/${endpoint}?${queryString}`
      : `${API_URL}/${endpoint}`

    // Configure fetch options
    const options = {
      method,
      headers: {},
    }

    // Add headers only for POST and PATCH
    if (method === 'POST' || method === 'PATCH') {
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
      }
    }

    // Add payload (body) for POST, PATCH, etc.
    if (payload) {
      options.body = JSON.stringify(payload)
    }

    // Make the fetch call
    const response = await fetch(url, options)

    // Handle errors
    await handleErrors(response)

    // Return JSON if the response is successful
    if (response.ok && method !== 'DELETE') {
      return await response.json()
    }

    // Return true for successful DELETE requests
    if (response.ok && method === 'DELETE') {
      return true
    }
  } catch (error) {
    console.error(`Error during ${method} request:`, error)
    toast.error(error.message)
  }
}

export default {
  get: (endpoint, queryParams = {}) => request('GET', endpoint, null, queryParams),
  post: (endpoint, payload) => request('POST', endpoint, payload),
  patch: (endpoint, payload) => request('PATCH', endpoint, payload),
  delete: (endpoint) => request('DELETE', endpoint),
}
