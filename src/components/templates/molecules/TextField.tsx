import React from 'react'
import { useForm } from 'react-hook-form'
import ReInput from '../atoms/StyledInput'

function TextField(props: {
  type: string
  name: string
  inputRef: ReturnType<typeof useForm>['register']
  helperText: string | undefined
}) {
  return (
    <div>
      <ReInput
        type={props.type}
        name={props.name}
        ref={props.inputRef}
        placeholder={props.name}
      />
      <p>{props.helperText}</p>
    </div>
  )
}

export default TextField
