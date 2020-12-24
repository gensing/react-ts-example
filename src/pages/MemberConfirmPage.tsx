import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSession } from 'hooks/useSession'
import { ILoginForm } from 'modules/session/types'
import ReDiv from 'components/templates/atoms/StyledDiv'
import TextField from 'components/templates/molecules/TextField'
import ReButton from 'components/templates/atoms/StyledButton'

import { loginSchema } from 'utils/yup'

export default () => {
  const { loginAction } = useSession()
  const { errors, handleSubmit, register } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  })

  return (
    <ReDiv>
      <form onSubmit={handleSubmit(loginAction)}>
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
    </ReDiv>
  )
}
