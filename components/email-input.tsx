'use client'

import React, { useState } from 'react'

interface EmailInputProps {
  label: string
  name: string
  required?: boolean
  placeholder?: string
}

export default function EmailInput({ label, name, required = false, placeholder }: EmailInputProps) {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [touched, setTouched] = useState(false)

  const validateEmail = (value: string): string[] => {
    const errors: string[] = []
    
    if (!value) {
      errors.push('Email is required')
    } else {
      // Basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        errors.push('Invalid email format')
      }
      
      // Additional validations
      if (value.length < 5) {
        errors.push('Email must be at least 5 characters long')
      }
      if (!value.includes('.')) {
        errors.push('Email must contain a domain (e.g., .com, .org)')
      }
      if (value.split('@').length > 2) {
        errors.push('Email should contain only one @ symbol')
      }
    }
    
    return errors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setEmail(newValue)
    if (touched) {
      setErrors(validateEmail(newValue))
    }
  }

  const handleBlur = () => {
    setTouched(true)
    setErrors(validateEmail(email))
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="email"
        id={name}
        name={name}
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          errors.length > 0 ? 'border-red-500' : 'border-gray-300'
        }`}
        aria-invalid={errors.length > 0}
        aria-describedby={errors.length > 0 ? `${name}-error` : undefined}
      />
      {errors.length > 0 && (
        <ul id={`${name}-error`} className="mt-1 text-sm text-red-500">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  )
}