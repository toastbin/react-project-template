import { get } from '../requests'

const getUserInfo = () => get('/api/user')

export {
  getUserInfo
}