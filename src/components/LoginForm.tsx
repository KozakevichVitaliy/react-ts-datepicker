import { Button, Col, Form, Input } from 'antd'
import React, { ReactElement } from 'react'
import { rules } from '../utils/rules'

interface Props {
  
}

export default function LoginForm({}: Props): ReactElement {
  return (
    <Form>

      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        {/* <Col span={6}> */}
          <Input />
        {/* </Col> */}
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      
    </Form>
  )
}
