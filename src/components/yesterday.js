import React from 'react'
import '../styles/style.scss'
import '../styles/card-left.scss'

export default function Yesterday() {
  return (
    <div style={{ "marginBottom": "50px" }}>
      <div className="heading_msl">
        <p className="heading_msl_today">Yesterday</p>
        <div className="popular_newest" style={{ "display": "flex" }}>
          <p className="newest">popular</p> &nbsp;&nbsp;
        <p className="newest">newest</p>
        </div>
      </div>
      {[
        {
          image: "https://ph-files.imgix.net/579db417-b025-443e-baa7-42b73ab72499?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
          title: "Basecamp Personal",
          text: "Manage all your small projects for free",
          comments: "12",
          upVote: "25431",
          device: "iPhone"
        },

        {
          image: "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
          title: "Basecamp Personal",
          text: "Manage all your small projects for free",
          comments: "13",
          upVote: "89431",
          device: "Android"
        },
        {
          image: "https://ph-files.imgix.net/3b8fff05-5ac3-4e2b-b902-4606c677d40a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
          title: "Basecamp Personal",
          text: "Manage all your small projects for free",
          comments: "10",
          upVote: "6531",
          device: "Analytics"
        },

        {
          image: "https://ph-files.imgix.net/851a5f0f-202e-40f7-8af0-e843faad0d93?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
          title: "Basecamp Personal",
          text: "Manage all your small projects for free",
          comments: "26",
          upVote: "431",
          device: "iPhone"
        },

        {
          image: "https://ph-files.imgix.net/96f4405d-e357-4d10-a473-45a3c718aed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
          title: "Basecamp Personal",
          text: "Manage all your small projects for free",
          comments: "64",
          upVote: "254",
          device: "Android"
        }
      ].map(product => {
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
          <div className="container-up-vote">
            <p>▲</p>
            <p>{product.upVote}</p>
          </div>
        </div>
      })}
    </div>
  )
}
