import React from 'react'

import Carousel from '@/components/common/carousel/Carousel'
import LeftMenu from './fragments/LeftMenu'

import {productService} from '@/api/products'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      /**
       * The list of top product which are sent to carousel component
       */
      topProducts: []
    }
    this.fetchTopItems = this.fetchTopItems.bind(this)
  }

  componentDidMount () {
    this.fetchTopItems()
  }

  /**
   * Set the list of top items
   */
  async fetchTopItems () {
    this.setState({topProducts: await productService.getProducts()})
  }

  render () {
    return (
      <section className="home-content">
        <div className="row mt-2">
          <div className="col-sm-4">
            <LeftMenu/>
          </div>
          <div className="col-sm-8">
            <h3>Top products</h3>
            <Carousel items={this.state.topProducts} height={245}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
