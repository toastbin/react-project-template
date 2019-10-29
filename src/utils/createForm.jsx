import React from 'antd'
import { Form } from 'antd'


function CreateForm(props) {
  const { options } = props

  return (
    <Form>

    </Form>
  )
}


const WrappedLoginForm = Form.create()(CreateForm)

export default WrappedLoginForm