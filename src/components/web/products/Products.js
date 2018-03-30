import React from 'react'

class Products extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this)
  }

  // todo: get products by category or brand
  getProducts () {
    this.setState({})
  }

  render () {
    return (
      <section>
        <h4>Products: {`${this.props.match.params.type} ${this.props.match.params.name}`}</h4>
      </section>
    )
  }
}

export default Products
