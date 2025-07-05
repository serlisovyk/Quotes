'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import deepEqual from 'deep-equal'
import Button from '@components/Button'
import InputField from '@components/InputField'
import Quotes from '@components/Quotes'
import Loader from '@components/Loader'
import { createSearchInputFields } from '@config/inputFields'
import { INITIAL_SEARCH_VALUES } from '@config/constants'
import { getSearchInputValidationMessage } from '@utils/validation'
import {
  createSearchQueryString,
  createSearchValuesFromQueryString,
} from '@utils/queryString'
import { useGetSearchQuotes } from '@queries/useGetSearchQuotes'

export default function SearchQuotesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchValues, setSearchValues] = useState(INITIAL_SEARCH_VALUES)
  const [searchButtonClicked, setSearchButtonClicked] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})
  const [queryParams, setQueryParams] = useState({})
  const [searchSubmitted, setSearchSubmitted] = useState(false)

  useEffect(() => {
    const qsValues = createSearchValuesFromQueryString(searchParams)
    const newValues = { ...INITIAL_SEARCH_VALUES, ...qsValues }

    if (!deepEqual(newValues, searchValues)) {
      setSearchValues(newValues)

      if (Object.keys(qsValues).length === 0) {
        setQueryParams({})
        setSearchSubmitted(false)
      } else {
        setQueryParams(qsValues)
        setSearchSubmitted(true)
      }
    }
  }, [searchParams])

  const isEnabled = searchSubmitted && Object.keys(queryParams).length > 0

  const { quotes, isLoading, error } = useGetSearchQuotes(queryParams, isEnabled)

  const handleSearch = () => {
    setSearchButtonClicked(true)
    if (Object.keys(validationErrors).length) return

    const queryParams = { ...searchValues }
    const query = createSearchQueryString(queryParams)
    router.push(`?${query}`)
    setQueryParams(queryParams)
    setSearchSubmitted(true)
  }

  const clearSearch = () => {
    setSearchValues({ ...INITIAL_SEARCH_VALUES })
    setValidationErrors({})
    setSearchButtonClicked(false)
    setSearchSubmitted(false)
    setQueryParams({})
    router.push(window.location.pathname)
  }

  const handleInputChange = (name, value) => {
    setSearchValues({ ...searchValues, [name]: value })

    const errorMessage = getSearchInputValidationMessage(name, value)
    const newValidationErrors = { ...validationErrors }

    if (errorMessage) {
      newValidationErrors[name] = errorMessage
    } else {
      delete newValidationErrors[name]
    }

    setValidationErrors(newValidationErrors)
  }

  const searchInputFields = createSearchInputFields({
    searchValues,
    validationErrors,
  })

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-6 text-center dark:text-white">Search Quotes</h1>

      <div className="text-xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_0.3fr] gap-4 mb-6">
        {searchInputFields.map(({ id, name, placeholder, value, error }) => (
          <InputField
            key={id}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleInputChange(name, e.target.value)}
            error={error}
            showError={searchButtonClicked}
          />
        ))}
      </div>

      <div className="flex justify-center mb-6">
        <Button onClick={handleSearch} text="Search" />
        <Button onClick={clearSearch} text="Clear" variant="secondary" />
      </div>

      {error && (
        <p className="text-center text-gray-600 mb-6">Error while fetching quotes</p>
      )}

      {isLoading ? (
        <Loader />
      ) : quotes.length ? (
        <Quotes
          quotes={quotes}
          selectedCategory={searchValues.category}
          searchText={searchValues.text}
        />
      ) : (
        searchSubmitted && (
          <p className="text-2xl pt-10 text-center text-gray-600 dark:text-gray-400">
            No quotes found.
          </p>
        )
      )}
    </div>
  )
}
