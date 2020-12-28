import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from 'components/templates/molecules/TextField'
import ReButton from 'components/templates/atoms/StyledButton'
import { schema, ILoginForm } from 'types/data/Session'

interface Props {
  onSubmit: (form: ILoginForm) => void
}

export default (props: Props) => {
  const { errors, handleSubmit, register } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <TextField
        type="text"
        name="username"
        helperText={errors.username?.message}
        inputRef={register}
      />
      <TextField
        type="password"
        name="password"
        helperText={errors.password?.message}
        inputRef={register}
      />
      <ReButton type="submit">login</ReButton>
    </form>
  )
}
