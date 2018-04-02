import {ApiService} from '@/common/api.service'

export const CategoryService = {
  async getAll () {
    const result = await ApiService.get('categories')
    return (result.data.status === 200)
      ? Promise.resolve(result.data.data)
      : Promise.reject(result.data.status)
  }
}
