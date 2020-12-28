import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ReButton from 'components/templates/atoms/StyledButton'
import TextField from 'components/templates/molecules/TextField'
import { IMemberForm, memberFormSchema } from 'types/data/Member'

interface Props {
  onSubmit: (form: IMemberForm) => void
}

export default (props: Props) => {
  const { register, handleSubmit, errors } = useForm<IMemberForm>({
    resolver: yupResolver(memberFormSchema),
  })
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <TextField
        type="text"
        name="name"
        helperText={errors.name?.message}
        inputRef={register}
      />
      <TextField
        type="text"
        name="email"
        helperText={errors.email?.message}
        inputRef={register}
      />
      <TextField
        type="password"
        name="password"
        helperText={errors.password?.message}
        inputRef={register}
      />
      <TextField
        type="password"
        name="passwordConfirm"
        helperText={errors.passwordConfirm?.message}
        inputRef={register}
      />
      <ReButton type="submit">회원가입</ReButton>
    </form>
  )
}
