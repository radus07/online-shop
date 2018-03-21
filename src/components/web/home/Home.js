import React from 'react'

import Carousel from '../../common/carousel/Carousel'
import LeftMenu from './fragments/LeftMenu'

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

  componentWillMount () {
    this.fetchTopItems()
  }

  /**
   * Set the list of top items
   */
  fetchTopItems () {
    // todo: receive the list from db
    this.setState({topProducts: [
      {
        title: 'Product One',
        description: 'The best product!',
        link: '/products/1',
        img: 'https://cdn.vox-cdn.com/thumbor/IRvg_2Li9KlAhPSUYCsrbuMQJ5U=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/4045828/tnailnew.0.jpg'
      },
      {
        title: 'Product Two',
        description: 'The most expensive product!',
        link: '/products/2',
        img: 'https://icdn2.digitaltrends.com/image/xiaomi-mi5-0022-2-720x720.jpg?ver=1.jpg'
      }
    ]})
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
