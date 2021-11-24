import axios from 'axios'
import request from './request'
import response from './response'

const instance = axios.create()

instance.setConfig = (glocalConfig = {}) => {
  instance.prototype.glocalConfig = glocalConfig
}

request(instance)
response(instance)

export default instance
