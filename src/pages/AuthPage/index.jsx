import React,{ useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Login } from '@components'
import './style.less'

const prefix = 'stx-auth'



function AuthPage(props) {
  useEffect(() => {})
  return (
    <div className={prefix}>
      <Login />
    </div>
  )
}

export default withRouter(AuthPage)