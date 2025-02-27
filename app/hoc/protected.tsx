import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from '@remix-run/react'

import { StateType } from 'redux/store'
import routes from 'routesPath'

type AuthParamType = {
  selector: (state: StateType) => boolean,
  redirectPath: string
}

type PropsType = {
  [key: string]: any
}

export const auth = {
  authenticated: {
    selector: (state: StateType) => state.auth.authenticated,
    redirectPath: routes.signin,
  },
  notAuthenticated: {
    selector: (state: StateType) => !state.auth.authenticated,
    redirectPath: routes.dashboard,
  },
}

export const withAuthentication = <P extends PropsType>(WrappedComponent: any, authParam: AuthParamType) => {
  const WithAuthentication = (props: P) => {
    const selector = useSelector(authParam.selector)
    const navigate = useNavigate()

    useEffect(() => {
      if (!selector) {
        navigate(authParam.redirectPath)
      }
    // TODO: Investigate this later. https://github.com/remix-run/react-router/discussions/8465
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selector])

    // if (!selector) {
    //   return null
    // }

    return <WrappedComponent {...props} />
  }

  return WithAuthentication
}
