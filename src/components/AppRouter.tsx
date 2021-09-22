import React, { ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IRoutes, privateRoutes, publicRoutes, RouteNames } from '../router'


export default function AppRouter(): ReactElement {
  const auth = false
  return (
    auth 
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
