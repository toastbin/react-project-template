import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'redux-react-hook'
import { Layout, Menu, Icon } from 'antd'
import noLoginImg from '@assets/imgs/home/no_login.png'
import routes from '@routes/routes.jsx'
import './style.less'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const prefix = 'stx-layout'

const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

export default function App() {
  const { global } = useDispatch()
  const [fold, setFold] = useState(true)
  useEffect(() => {
    // global.getUserInfo()
    // console.log(global);
  }, [global])

  return (
      <Layout className={prefix}>
        <Sider trigger={null} collapsible collapsed={fold}>
          <div className={`${prefix}-sider-avatar`}>
            {
              false ? 
                <img src='http://img4.imgtn.bdimg.com/it/u=3721990951,2750770129&fm=26&gp=0.jpg' alt='' />
              :
                <img src={noLoginImg} alt='' />
            }
          </div>
          <Menu style={{position: 'relative'}} theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <SubMenu
              key="1"
              title={
                <span>
                  <Icon type="user" />
                  <span>我的</span>
                </span>
              }
            >
              <Menu.Item key="sub1">签到</Menu.Item>
              <Menu.Item key="sub3">设置</Menu.Item>
            </SubMenu>

            <SubMenu
              key="2"
              title={
                <span>
                  <Icon type="edit" />
                  <span>日报周报</span>
                </span>
              }
            >
              <Menu.Item key="sub1">填写</Menu.Item>
              <Menu.Item key="sub2">查看</Menu.Item>
            </SubMenu>
            </Menu>
          <div 
            className={`${prefix}-sider-trigger`}
            onClick={() => setFold(!fold)}
          >
            <Icon  type={ fold ? 'right' : 'left' }/>
          </div>
        </Sider>
        <Layout>
          <Header className={`${prefix}-header`}>
            <Menu mode='horizontal' className={`${prefix}-header-menu`}>
              <Menu.Item key='home'>
                <Icon type='home' />
                主页
              </Menu.Item>
              <Menu.Item key='community'>
                <Icon type='profile' />
                社区
              </Menu.Item>
            </Menu>
          </Header>
          <Content className={`${prefix}-content`}>
            <Router>
              <Switch>
                {routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
                ))}
                <Redirect from='' to='/' />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Layout>
  )
}
