import React from 'react'
import '../styles/style.scss'
import '../styles/card-left.scss'

export default class Upcoming extends React.Component {

  render() {
    return (
      <div>
        <div>
          <div className="heading_msl">
            <p className="heading_msl_today">Upcoming <small style={{ "fontWeight": "100", "fontSize": "small" }}>powered by Ship</small></p>
          </div>
          {(this.props.data) ? this.props.data.map(product => {
            return <div className="container">
              <div className="container-img">
                <img src={product.thumbnail.image_url} alt="image" height="80px" width="80px" />
              </div>
              <div className="container-content">
                <p>{product.name}</p>
                <p>{product.tagline}</p>
                <span className="comments"><svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="#000" fill-rule="evenodd"></path></svg>
                  {product.comments_count}</span>
                <span className="container-device">Android</span>
              </div>
              <div onClick={() => this.props.updateCount(product.id)} className="container-up-vote">
                <p>▲</p>
                <p>{product.votes_count}</p>
              </div>
            </div>
          }) : <div style={{"display":"flex"}} className="loader_parent">
              <div class="loader"></div> &nbsp;
              <p style={{"marginLeft":"5px"}}>Fetching Products</p></div>}
        </div>
      </div>
    )
  }
}
