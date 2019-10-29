import { init } from '@rematch/core'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createLoadingPlugin from '@rematch/loading'
import Models from '@models/index'

const options = {}

const loading = createLoadingPlugin(options)

const store = init({
  models: {
    ...Models
  },
  redux: {
    middlewares: [thunk, logger]
  },
  plugins: [loading]
})

export default store