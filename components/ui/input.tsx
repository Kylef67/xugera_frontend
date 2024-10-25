'use client'

import React, { useState } from 'react'

interface InputProps {
  label: string
  name: string
  type: string
  placeholder?: string
  required?: boolean
  validate: (value: string) => string[]
}

export default function Input({
  label,
  name,
  type,
  placeholder,
  required = false,
  validate
}: InputProps) {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [touched, setTouched] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (touched) {
      setErrors(validate(newValue))
    }
  }

  const handleBlur = () => {
    setTouched(true)
    setErrors(validate(value))
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
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