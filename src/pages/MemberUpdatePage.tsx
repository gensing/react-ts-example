import React from 'react'
import { useDispatch } from 'react-redux'
import { useSession } from 'hooks/useSession'
import { putApi } from 'modules/member/api'
import { actions } from 'modules/session/actions'
import ReDiv from 'components/templates/atoms/StyledDiv'
import TextField from 'components/templates/molecules/TextField'
import ReButton from 'components/templates/atoms/StyledButton'
import { useForm } from 'react-hook-form'
import { IMemberUpdateForm } from 'modules/member/types'
import { IPasswordConfirm } from 'types/IPasswordConfirm'
import { yupResolver } from '@hookform/resolvers/yup'
import { memberUpdateSchema } from 'utils/yup'

export default (props: any) => {
  const dispatch = useDispatch()
  const { session } = useSession()

  const { register, handleSubmit, errors } = useForm<
    IMemberUpdateForm & IPasswordConfirm
  >({
    resolver: yupResolver(memberUpdateSchema),
  })

  const onSubmit = React.useCallback(
    (values) => {
      if (session.data !== null) {
        putApi(session.data.id, values)
          .then(() => dispatch(actions.logout()))
          .catch(() => {})
      }
    },
    [session, dispatch]
  )

  return (
    <ReDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <ReButton type="submit">update</ReButton>
      </form>
    </ReDiv>
  )
}
