'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { INITIAL_FORM_VALUES } from '@config/constants'
import QuoteForm from '@components/QuoteForm'
import { createQuote } from '@services/services'

export default function CreateQuotePage() {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES)
  const [validationErrors, setValidationErrors] = useState({})

  const router = useRouter()

  const handleSubmit = () => createQuote({ formValues, setValidationErrors, router })

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
