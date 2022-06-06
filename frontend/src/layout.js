import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SnippetsOutlined,
  PieChartOutlined,
  QuestionOutlined,
} from '@ant-design/icons';

import Form from './form'

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={!collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['3']}
          items={[
            {
              key: '1',
              icon: <SnippetsOutlined />,
              label: 'ЗӨВӨЛГӨӨ',
            },
            {
              key: '2',
              icon: <PieChartOutlined />,
              label: 'СУДАЛГАА',
            },
            {
              key: '3',
              icon: <QuestionOutlined />,
              label: 'ТАНДАЛТ',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '30px 20px',
            padding: 65,
            minHeight: 280,
          }}
        >
          <Form/>
        </Content>
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
        ©2022 он Б. Хишигдэлгэр
      </Footer>
      </Layout>
    </Layout>
  );
};

export default App;