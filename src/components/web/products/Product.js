import React from 'react'

export default function Product (props) {
  return (
    <section>
      <h3>Product: {props.match.params.id}</h3>
    </section>
  )
}
