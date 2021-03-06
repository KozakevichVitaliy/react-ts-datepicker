import { Button, Form, Input } from 'antd'
import React, { ReactElement, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/useActions'
import { useTypedUseSelector } from '../hooks/useTypedSelector'
import { rules } from '../utils/rules'

interface Props {
  
}

export default function LoginForm({}: Props): ReactElement {
  const dispatch = useDispatch()
  const [loginData, setLoginData]= useState({ username: '', password: '' })
  const { error, isLoading } = useTypedUseSelector(state => state.authReducer)
  const { login } = useActions()

  const submit = () => {
    const { username, password }  = loginData
    login(username, password)
  }

  const inputHandler = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement
    setLoginData({ ...loginData, [input.name]: input.value })
  }

  return (
    <Form
      onFinish={submit}
    >
      {
        error 
        && <div style={{color: 'red'}}>{ error }</div>
      }
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input onInput={inputHandler} name="username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password onInput={inputHandler} name="password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
      
    </Form>
  )
}
