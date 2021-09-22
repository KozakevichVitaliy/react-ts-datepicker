import { Layout, Row, Menu } from 'antd'
import React, { ReactElement } from 'react'
import { useHistory } from 'react-router'
import { useTypedUseSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

interface Props {
  
}


export default function Navbar({}: Props): ReactElement {
  const router = useHistory()
  const { isAuth } = useTypedUseSelector(state => state.authReducer)
  return (
    <Layout.Header>
      <Row justify="end">

        {
          isAuth 
            ?
            <>
              <div style={{ color: 'white', marginRight: '5px' }}>
                App Type Script
              </div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item 
                  onClick={() => console.log('выйти!')} 
                  key={1}
                >Logout</Menu.Item>
              </Menu>
            </>
            : 
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item 
                onClick={() => router.push(RouteNames.LOGIN)} 
                key={1}
              >Login</Menu.Item>
            </Menu>
        }
        
      </Row>
    </Layout.Header>
  )
}
