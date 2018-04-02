import {ApiService} from '@/common/api.service'

export const BrandService = {
  async getAll () {
    const result = await ApiService.get('brands')
    return (result.data.status === 200)
      ? Promise.resolve(result.data.data)
      : Promise.reject(result.data.status)
  }
}
