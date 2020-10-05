import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-837f7.firebaseio.com/'
})

export default instance
