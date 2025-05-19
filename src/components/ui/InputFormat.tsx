'use client'

import { forwardRef } from 'react'
import { PatternFormat, PatternFormatProps } from 'react-number-format'
import Input from './Input'

type InputFormatProps = Omit<PatternFormatProps, 'customInput'> & {
  error?: string
  className?: string
  containerClassName?: string
}

const InputFormat = forwardRef<HTMLInputElement, InputFormatProps>(
  ({ error, className, containerClassName, ...props }, ref) => {
    return (
      <PatternFormat
        getInputRef={ref}
        customInput={Input}
        error={error}
        className={className}
        containerClassName={containerClassName}
        {...props}
      />
    )
  }
)

InputFormat.displayName = 'InputFormat'

export default InputFormat
