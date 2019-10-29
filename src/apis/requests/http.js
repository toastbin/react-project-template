import axios from 'axios'
import qs from 'qs'
import httpInterceptor from './httpInterceptor'

const BASE_URL = 'http://localhost:8088'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})

const interceptor = axiosInstance.interceptors

const setupInterceptors = () => {
  httpInterceptor(interceptor)
}

setupInterceptors()


export function post(url, data, config) {
  let contentType
  if(!config) {
    data = qs.stringify(data)
    contentType = 'application/x-www-form-urlencoded; charset=UTF-8'
  } else if(config.json === true) {
    contentType = 'application/json'
  }
  return axiosInstance.post(url, data, {
    headers: {
      'Content-Type': contentType
    }
  })
}

export function get(url) {
  return axiosInstance.get(url)
}

