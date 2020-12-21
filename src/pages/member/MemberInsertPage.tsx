import ReButton from 'components/templates/atoms/ReButton'
import ReDiv from 'components/templates/atoms/ReDiv'
import TextField from 'components/templates/molecules/TextField'
import React from 'react'
import { useMemberInsertForm } from '../../hooks/memberHooks'

export default () => {
  const { register, handleSubmit, errors } = useMemberInsertForm()

  return (
    <ReDiv>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          label="name"
          helperText={errors.name?.message}
          inputRef={register}
        />
        <TextField
          type="text"
          name="email"
          label="email"
          helperText={errors.email?.message}
          inputRef={register}
        />
        <TextField
          type="password"
          name="password"
          label="password"
          helperText={errors.password?.message}
          inputRef={register}
        />
        <TextField
          type="password"
          name="passwordConfirm"
          label="passwordConfirm"
          helperText={errors.passwordConfirm?.message}
          inputRef={register}
        />
        <ReButton type="submit">회원가입</ReButton>
      </form>
    </ReDiv>
  )
}
