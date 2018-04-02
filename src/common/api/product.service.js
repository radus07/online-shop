import {ApiService} from '@/common/api.service'

export const ProductService = {
  async getAll () {
    const result = await ApiService.get('products')
    return (result.data.status === 200)
      ? Promise.resolve(result.data.data)
      : Promise.reject(result.data.status)
  }
}
