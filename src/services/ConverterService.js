import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.frankfurter.app'
})

export default {
  getCurrencies() {
    return apiClient.get('/currencies')
  }
}
