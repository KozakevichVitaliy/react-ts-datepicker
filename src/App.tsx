import { Layout } from 'antd';
import React, { ReactElement } from 'react'
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

function App(): ReactElement  {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
