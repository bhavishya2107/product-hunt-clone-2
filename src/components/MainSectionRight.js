import React from 'react'
import '../styles/style.scss'
import Form from '../components/form'


export default class MainSectionRight extends React.Component {
  render() {
    return (
      <div>
        <div className="main-right">
          <p className="makers_top">Makers Working Today</p>
          <div className="makers_container">
            <div className="makers_img_container">
              {["1", "2", "3", "4", "5", "6"].map((person, index) => (
                <img
                  className="makers_img"
                  src={`images/i${index + 1}.jpeg `}
                  alt=""
                />
              ))}
              {["1", "2", "3", "4", "5", "6"].map((person, index) => (
                <img
                  className="makers_img"
                  src={`images/i${index + 6}.jpeg `}
                  alt=""
                />
              ))}
            </div>
            <p className="join">JOIN THEM ON MAKERS</p>
          </div>
          <p className="product_hunt">Product Hunt Radio</p>
          <div className="product_hunt_container">
            <div className="product_hunt_left">
              <p className="product_hunt_text">
                The future of seed stage VC with Tige Savage
          </p>
            </div>
            <div className="product_hunt_right">
              <img
                className="product_hunt_img"
                src="images/product_hunt.png"
                alt=""
              />
            </div>

          </div>
          <p className="product_hunt" style={{ "position": "relative", "bottom": "5rem" }}>Add Products</p>
          <form onSubmit={(e) => this.props.submit(e)} className="right_form">
            <input type="text" value={this.props.state.title} name="title" onChange={(e) => this.props.handleChange(e)} placeholder="Enter Product Name" />
            <input type="text" value={this.props.state.text} name="text" onChange={(e) => this.props.handleChange(e)} placeholder="Enter Description" />
            <input type="text" value={this.props.state.image} name="image" onChange={(e) => this.props.handleChange(e)} placeholder="Image URL" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

