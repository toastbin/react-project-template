import { getUserInfo as getInfo } from '@apis'

const global = {
  state: {
    userInfo: ''
  },
  reducers: {
    userInfo(state, data) {
      return {
        ...state,
        userInfo: data
      }
    },
  },
  effects: dispatch => ({
    getUserInfo(payload, rootState) {
      getInfo().then( res => {
        dispatch.global.userInfo(res.data)
      })
    }
  })
}

export default global