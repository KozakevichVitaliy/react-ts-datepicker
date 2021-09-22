import { Layout, Row } from 'antd'
import Form from 'rc-field-form/es/Form'
import React, { ReactElement } from 'react'
import LoginForm from '../components/LoginForm'

interface Props {
  
}

export default function Login({}: Props): ReactElement {
  return (
    <Layout>
      <Row justify='center' align='middle' className="h100">
        <LoginForm />
      </Row>
    </Layout>
  )
}
