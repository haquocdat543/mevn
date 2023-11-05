import axios from 'axios'

export default() => {
  return axios.create({
   baseURL: "http://54.95.47.76:3000"
  })
}
