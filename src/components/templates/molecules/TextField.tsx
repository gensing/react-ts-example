import React, { ClassAttributes, HtmlHTMLAttributes, RefObject } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import ReInput from '../atoms/ReInput'

const Label = styled.label`
  display: block;
`

function TextField(props: {
  type: string
  name: string
  label: string
  inputRef: ReturnType<typeof useForm>['register']
  helperText: string | undefined
}) {
  return (
    <div>
      <Label>{props.label}</Label>
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
