import React from 'react'
import '../styles/style.scss'
import '../styles/card-left.scss'

export default class Upcoming extends React.Component {

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <div className="heading_msl">
            <p className="heading_msl_today">Upcoming <small style={{ "fontWeight": "100", "fontSize": "small" }}>powered by Ship</small></p>
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
              <div onClick={() => this.props.updateCount(product.id)} className="container-up-vote">
                <p>▲</p>
                <p>{product.upVote}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}
