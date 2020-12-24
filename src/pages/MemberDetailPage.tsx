import React, { useCallback, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useSession } from 'hooks/useSession'
import { Maybe } from 'components/functions/Maybe'
import ReButton from 'components/templates/atoms/StyledButton'
import { deletApi, getApi } from 'modules/member/api'
import { IRootState } from 'modules'
import { actions } from 'modules/session/actions'
import { getMemberAction, getMemberSuccessAction } from 'modules/member/actions'
import ReLink from 'components/templates/atoms/StyledLink'

export default (): JSX.Element => {
  const {
    session: { isLogin, data },
  } = useSession()

  if (data === null) return <Redirect to="/error/403" />

  const dispatch = useDispatch()
  const member = useSelector((store: IRootState) => store.member)

  const onClick = useCallback(() => {
    deletApi(data.id)
      .then(() => dispatch(actions.logout))
      .catch(() => {})
  }, [])

  useEffect(() => {
    getApi(data.id).then((resp) => {
      dispatch(getMemberSuccessAction(resp.data))
    })
  }, [])

  return (
    <div>
      <Maybe isLogin={isLogin}>
        <ReLink to="/member/update">update</ReLink>
        <ReButton type="button" onClick={onClick}>
          delete
        </ReButton>
      </Maybe>
    </div>
  )
}
