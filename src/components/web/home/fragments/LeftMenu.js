import React from 'react'
import {Link} from 'react-router-dom'
import {CategoryService, BrandService} from '@/common/api.service'

class LeftMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      /**
       * The list of categories which is rendered in the `categories` tab
       */
      categories: [],
      /**
       * The list of brands which is rendered in the `brands` tab
       */
      brands: []
    }
    this.getCategories = this.getCategories.bind(this)
    this.getBrands = this.getBrands.bind(this)
  }

  componentDidMount () {
    this.getCategories()
    this.getBrands()
  }

  /**
   * Get the list of categories
   */
  async getCategories () {
    this.setState({categories: await CategoryService.getAll()})
  }

  /**
   * Get the list of brands
   */
  async getBrands () {
    this.setState({brands: await BrandService.getAll()})
  }

  render () {
    return (
      <section>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#categories">Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#brands">Brands</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="categories">
            <div className="list-group">
              {this.state.categories.map((category, i) =>
                <Link key={i} to={`/products/category/${category.link}`} className="list-group-item list-group-item-action">{category.name}</Link>
              )}
            </div>
          </div>
          <div className="tab-pane" id="brands">
            <div className="list-group">
              {this.state.brands.map((brand, i) =>
                <Link key={i} to={`/products/brand/${brand.link}`} className="list-group-item list-group-item-action">{brand.name}</Link>
              )}
            </div></div>
        </div>
      </section>
    )
  }
}

export default LeftMenu
