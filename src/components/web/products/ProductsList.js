import React from 'react'

export default function ProductsList (props) {
  return (
    <section>
      <h4>Products:
        {props.match.params.category && <span> {props.match.params.category}</span>}
        {props.match.params.brand && <span> {props.match.params.brand}</span>}
        {(!props.match.params.brand && !props.match.params.category) && <span> all</span>}
      </h4>
    </section>
  )
}
