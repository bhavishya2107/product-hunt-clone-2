import React from 'react'
import './styles/style.scss'
import './styles/card-left.scss'


class Card extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="heading_msl">
          <p className="heading_msl_today">Today</p>
          <div className="popular_newest" style={{ "display": "flex" }}>
            <p className="newest" >popular</p> &nbsp; &nbsp;
          <p className="newest" >newest</p>
          </div>
        </div>
        {this.props.data.map(product => {
          return <div className="container">
            <div className="container-img">
              <img src={product.image} alt="" />
            </div>
            <div className="container-content">
              <p>{product.title}</p>
              <p>{product.text}</p>
              <span className="comments"><svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="#000" fill-rule="evenodd"></path></svg>
                {product.comments}</span>
              <span className="container-device">{product.device}</span>
            </div>
            <div className="container-up-vote" onClick={this.props.updateCount(product.id)}>
              <p>▲</p>
              <p>{product.upVote}</p>
            </div>
          </div>
        })}
      </div>

    )
  }

}

export default Card

