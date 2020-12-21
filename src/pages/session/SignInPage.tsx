import { yupResolver } from '@hookform/resolvers/yup'
import { loginApi } from 'api/sessionApi'
import ReButton from 'components/templates/atoms/ReButton'
import ReDiv from 'components/templates/atoms/ReDiv'
import TextField from 'components/templates/molecules/TextField'
import { sessionActions } from 'datalayer/session/sessionDuck'
import React, { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginSchema } from 'types/membe'
import { ILoginRequest } from 'types/session'
import { setSession } from 'utils/token'

//https://wanago.io/2020/10/05/forms-react-hook-form-typescript/np
//https://wanago.io/2020/10/05/forms-react-hook-form-typescript/

export default () => {
  let history = useHistory()
  const dispatch = useDispatch()

  const { errors, handleSubmit, register } = useForm<ILoginRequest>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = useCallback(
    (form: ILoginRequest) => {
      loginApi(form)
        .then((resp) => {
          setSession(resp.data.accessToken)
          dispatch(sessionActions.login({ ...resp.data }))
          history.push('/')
        })
        .catch((e) => {
          alert(e)
        })
    },
    [dispatch]
  )

  const inputList = useMemo(
    () => [
      {
        type: 'text',
        name: 'username',
        label: 'username',
        helperText: errors.username?.message,
        inputRef: { register },
      },
      {
        type: 'password',
        name: 'password',
        label: 'password',
        helperText: errors.password?.message,
      },
    ],
    [register, errors]
  )

  return (
    <ReDiv>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputList.map((i) => (
            <TextField
              key={i.type}
              type={i.type}
              name={i.name}
              label={i.label}
              helperText={i.helperText}
              inputRef={register}
            />
          ))}
          <ReButton type="submit">login</ReButton>
        </form>
      </div>
    </ReDiv>
  )
}
