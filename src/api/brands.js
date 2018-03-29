import axios from './axios.config'

const API_URL = '/api/brands'

export const brandService = {
  getBrands () {
    return axios.get(API_URL)
      .then(result => {
        return (result.data.status === 200)
          ? Promise.resolve(result.data.data)
          : Promise.reject(result.data.status)
      })
  }
}
