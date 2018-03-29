import axios from './axios.config'

const API_URL = '/api/products'

export const productService = {
  getProducts () {
    return axios.get(API_URL)
      .then(result => {
        return (result.data.status === 200)
          ? Promise.resolve(result.data.data)
          : Promise.reject(result.data.status)
      })
  }
}
