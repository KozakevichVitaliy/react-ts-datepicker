import React from 'react'
import Event from '../pages/Event'
import Login from '../pages/Login'

export interface IRoutes {
  path: string,
  component: React.ComponentType, 
  exact?: boolean
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/'
}

export const publicRoutes: IRoutes[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login }
]

export const privateRoutes: IRoutes[] = [
  { path: RouteNames.EVENT, exact: true, component: Event }
]