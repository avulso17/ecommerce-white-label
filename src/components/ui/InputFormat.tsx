'use client'

import { forwardRef } from 'react'
import { PatternFormat, PatternFormatProps } from 'react-number-format'
import Input from './Input'

type InputFormatProps = Omit<PatternFormatProps, 'customInput'> & {
  errorText?: string
  className?: string
  containerClassName?: string
}

const InputFormat = forwardRef<HTMLInputElement, InputFormatProps>(
  ({ errorText, className, containerClassName, ...props }, ref) => {
    return (
      <PatternFormat
        getInputRef={ref}
        customInput={Input}
        error={errorText}
        className={className}
        containerClassName={containerClassName}
        {...props}
      />
    )
  }
)

InputFormat.displayName = 'InputFormat'

export default InputFormat
