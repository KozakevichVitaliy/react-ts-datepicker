import React, { ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useTypedUseSelector } from '../hooks/useTypedSelector'
import { IRoutes, privateRoutes, publicRoutes, RouteNames } from '../router'


export default function AppRouter(): ReactElement {
  const { isAuth } = useTypedUseSelector(state => state.authReducer)
  return (
    isAuth 
    ? 
    <Switch>
      {privateRoutes.map(({ component, path, exact }: IRoutes): ReactElement  => (
         <Route path={path} component={component} exact={exact} key={path} />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
    : 
    <Switch>
      {publicRoutes.map(({ component, path, exact }: IRoutes): ReactElement => (
        <Route path={path} component={component} exact={exact} key={path} />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
    
  )
}
