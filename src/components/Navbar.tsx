import { Layout, Row, Menu } from 'antd'
import React, { ReactElement } from 'react'
import { useHistory } from 'react-router'
import { useActions } from '../hooks/useActions'
import { useTypedUseSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

interface Props {
  
}


export default function Navbar({}: Props): ReactElement {
  const router = useHistory()
  const { logout } = useActions()
  const { isAuth, user } = useTypedUseSelector(state => state.authReducer)
  return (
    <Layout.Header>
      <Row justify="end">

        {
          isAuth 
            ?
            <>
              <div style={{ color: 'white', marginRight: '5px' }}>
                { user.username }
              </div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item 
                  onClick={() => logout()} 
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
