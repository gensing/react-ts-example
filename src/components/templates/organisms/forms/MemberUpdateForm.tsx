import React from 'react'
import { useForm } from 'react-hook-form'
import ReDiv from 'components/templates/atoms/StyledDiv'
import TextField from 'components/templates/molecules/TextField'
import ReButton from 'components/templates/atoms/StyledButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMemberUpdateForm, memberUpdateFormSchema } from 'types/data/Member'

interface Props {
  onSubmit: (form: IMemberUpdateForm) => void
}

export default (props: Props) => {
  const { register, handleSubmit, errors } = useForm<IMemberUpdateForm>({
    resolver: yupResolver(memberUpdateFormSchema),
  })

  return (
    <ReDiv>
      <form onSubmit={handleSubmit(props.onSubmit)}>
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
