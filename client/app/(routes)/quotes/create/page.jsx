'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { INITIAL_FORM_VALUES } from '@config/constants'
import QuoteForm from '@components/QuoteForm'
import { useCreateQuote } from '@queries/useCreateQuote'
import { isQuoteFormValid } from '@utils/validation'

export default function CreateQuotePage() {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES)
  const [validationErrors, setValidationErrors] = useState({})

  const router = useRouter()

  const onSuccessRedirect = (id) => router.push(`/quotes/${id}`)

  const { createQuote } = useCreateQuote(onSuccessRedirect)

  const handleSubmit = () => {
    if (!isQuoteFormValid({ values: formValues, setValidationErrors })) return

    const { text, author, categories } = formValues

    const payload = {
      text,
      author,
      categories: categories.split(',').map((category) => category.trim()),
    }

    createQuote(payload)
  }

  return (
    <QuoteForm
      values={formValues}
      setValues={setFormValues}
      validationErrors={validationErrors}
      setValidationErrors={setValidationErrors}
      handleSubmit={handleSubmit}
      buttonText="Create"
    />
  )
}
