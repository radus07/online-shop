import axios from 'axios'
import {BrandService} from './api/brand.service'
import {CategoryService} from './api/category.service'
import {ProductService} from './api/product.service'

// Set base url used for REST requests
axios.defaults.baseURL = 'http://localhost:8083/api'

const ApiService = {
  get (resource, slug = '') {
    return axios.get(`${resource}/${slug}`)
  },
  post (resource, body) {
    return axios.post(resource, body)
  },
  put (resource, body) {
    return axios.put(resource, body)
  },
  delete (resource, body) {
    return axios.delete(resource, body)
  }
}

export {ApiService, BrandService, CategoryService, ProductService}
