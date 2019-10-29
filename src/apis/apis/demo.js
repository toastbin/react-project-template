import { post, get } from '../requests'

const getDemo = name => get(`/api/get?name=${name}`)

const postDemoFd = data => post('/api/fd', data)

const postDemoJson = payload => post('/api/json', payload, { json: true})

export {
  getDemo,
  postDemoFd,
  postDemoJson
}