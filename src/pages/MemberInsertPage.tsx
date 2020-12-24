import React from 'react'
import { useForm } from 'react-hook-form'
import { useApi } from 'hooks/useApi'
import { postApi } from 'modules/member/api'
import { IMemberForm } from 'modules/member/types'
import ReDiv from 'components/templates/atoms/StyledDiv'
import ReButton from 'components/templates/atoms/StyledButton'
import TextField from 'components/templates/molecules/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { IPasswordConfirm } from 'types/IPasswordConfirm'
import { memberSchema } from 'utils/yup'

export default () => {
  const { state, fetchData } = useApi<IMemberForm, void>(postApi)

  const { register, handleSubmit, errors } = useForm<
    IMemberForm & IPasswordConfirm
  >({
    resolver: yupResolver(memberSchema),
  })

  return (
    <ReDiv>
      <form onSubmit={handleSubmit(fetchData)}>
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
    </ReDiv>
  )
}
