import React from 'react'
import '../styles/style.scss'
// import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-div">
            <div className="header-content-div">
                <a to="/" style={{ textDecoration: "none" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg>
                </a>
                <div className="input_container">
                    <span className="search_container">
                        <img className="search" src="./search.png" alt="" />
                    </span>
                    <input className="input_box"
                        type="text"
                        placeholder="Discover your next favorite thing..."
                    ></input>
                </div>
                <span>Deals</span>
                <a to="/jobs" style={{ textDecoration: "none" }}>
                    <span>Jobs</span>
                </a>
                <a to="/upcoming" style={{ textDecoration: "none" }}>
                    <span>Upcoming</span>
                </a>
                <span>Radio</span>
                <span>Ship</span>
                <span>...</span>
                <div className="right_elm">
                    <button className="login_btn">LOG IN</button>
                    <button className="signup_btn">SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default Header;