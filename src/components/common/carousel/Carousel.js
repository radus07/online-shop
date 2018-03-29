import React from 'react'
import {Link} from 'react-router-dom'

const Carousel = (props) => (
  <div id="carousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {props.items.map((item, i) => <li key={i} data-target="#carousel" data-slide-to={i} className={(i === 0) ? 'active' : ''}/>)}
    </ol>
    <div className="carousel-inner">
      {props.items.map((item, i) =>
        <div className={(i === 0) ? 'carousel-item active' : 'carousel-item'} key={i}>
          <Link to={`/products${item.link}`}>
            <img className="d-block w-100" src={item.images[0]} height={props.height} alt={item.title}/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </Link>
        </div>
      )}
    </div>
    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"/>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"/>
      <span className="sr-only">Next</span>
    </a>
  </div>
)

export default Carousel
