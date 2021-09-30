import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IUser } from "../../../models/IUser";
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
  setAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: error }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction  => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      setTimeout(async () => {
        const res = await UserService.getUsers()
        const mockUser = res.data.find(user => 
          user.username === username && user.password === password )
        if (mockUser) {
          localStorage.setItem('username', mockUser.username)
          localStorage.setItem('auth', 'true')
          dispatch(AuthActionCreators.setUser(mockUser))
          dispatch(AuthActionCreators.setAuth(true))
        } else {
          dispatch(AuthActionCreators.setError('Incorrect credential data!'))
        }
        dispatch(AuthActionCreators.setIsLoading(false))
      }, 1000)
      
    } catch (error) {
      dispatch(AuthActionCreators.setError('Login Error!'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem('auth')
      localStorage.removeItem('username')
      dispatch(AuthActionCreators.setUser({} as IUser))
      dispatch(AuthActionCreators.setAuth(false))
    } catch (error) {
      dispatch(AuthActionCreators.setError('Logout Error!'))
    }
  },
}