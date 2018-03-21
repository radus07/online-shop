import React from 'react'
import {Link} from 'react-router-dom'

/**
 * The list of categories which are displayed in the `categories` tab
 * @type {*[]}
 * todo: receive the list of categories from db
 */
const categories = [
  {name: 'PCs', link: '/products/category/pc'},
  {name: 'Mobile Phones', link: '/products/category/phones'},
  {name: 'Gadgets', link: '/products/category/gadgets'},
  {name: 'TVs', link: '/products/category/tv'},
  {name: 'For Gamers', link: '/products/category/gamers'}
]

/**
 * The list of brands which are displayed in the `brands` tab
 * @type {*[]}
 * todo: receive the list of producers from db
 */
const brands = [
  {name: 'Apple', link: '/products/brand/apple'},
  {name: 'Samsung', link: '/products/brand/samsung'},
  {name: 'Asus', link: '/products/brand/asus'},
  {name: 'Xiaomi', link: '/products/brand/xiaomi'},
  {name: 'LG', link: '/products/brand/lg'}
]

export default function LeftMenu () {
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
            {categories.map((category, i) =>
              <Link key={i} to={category.link} className="list-group-item list-group-item-action">{category.name}</Link>
            )}
          </div>
        </div>
        <div className="tab-pane" id="brands">
          <div className="list-group">
            {brands.map((brand, i) =>
              <Link key={i} to={brand.link} className="list-group-item list-group-item-action">{brand.name}</Link>
            )}
          </div></div>
      </div>
    </section>
  )
}
