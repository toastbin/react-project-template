import React from 'react'
import Cookie from 'js-cookie'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './style.less'
const prefix = 'stx-login'


function Login(props) {
  const { getFieldDecorator, validateFields } = props.form

  function handleSubmit(e) {
    e.preventDefault()

    validateFields((err, values) => {
      if(!err) console.log(`reveived values of form,`, values)
      Cookie.set('token', 'oAfUk1QjKxlPKwDgW-JF1W5lRrFs')
    })

  }

  return (
    <div className={prefix}>
      <Form onSubmit={handleSubmit} className={`${prefix}-login-form`}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
          <span className={`${prefix}-login-form-forgot`}>
            忘记密码
          </span>
          <Button type="primary" htmlType="submit" className={`${prefix}-login-form-button`}>
            登陆
          </Button>
          没有账号? <span className={`${prefix}-tips`}>马上注册!</span>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form.create({name: 'login'})(Login)