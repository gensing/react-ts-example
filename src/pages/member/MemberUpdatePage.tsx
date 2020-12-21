import ReButton from 'components/templates/atoms/ReButton'
import ReDiv from 'components/templates/atoms/ReDiv'
import TextField from 'components/templates/molecules/TextField'
import React, { useCallback } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useMemberUpdateForm } from '../../hooks/memberHooks'
import { useSession } from '../../hooks/sessionHooks'

export default (props: any) => {
  let history = useHistory()

  const { data, isLogin } = useSession()
  if (data === null) return <Redirect to="/error/403" />

  const { register, handleSubmit, errors } = useMemberUpdateForm(data.id)

  return (
    <ReDiv>
      <form onSubmit={handleSubmit}>
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
        <ReButton type="submit">update</ReButton>
      </form>
    </ReDiv>
  )
}
