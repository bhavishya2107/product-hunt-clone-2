import React from 'react'
import './App.css'
import Card from './todo'
import Header from './components/header'
import Yesterday from './components/yesterday'
import Upcoming from './components/upcoming'
import MainSectionRight from './components/MainSectionRight'
import './styles/card-left.scss'
import './styles/loader.scss'
import axios from 'axios'

let id = 0
let data = [
  {
    image: "https://ph-files.imgix.net/579db417-b025-443e-baa7-42b73ab72499?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    title: "Basecamp Personal",
    text: "Manage all your small projects for free",
    comments: "12",
    upVote: "25431",
    device: "iPhone",
    id: id++
  },

  {
    image: "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    title: "Basecamp Personal",
    text: "Manage all your small projects for free",
    comments: "13",
    upVote: "89431",
    device: "Android",
    id: id++
  },
  {
    image: "https://ph-files.imgix.net/3b8fff05-5ac3-4e2b-b902-4606c677d40a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    title: "Basecamp Personal",
    text: "Manage all your small projects for free",
    comments: "10",
    upVote: "6531",
    device: "Analytics",
    id: id++
  },

  {
    image: "https://ph-files.imgix.net/851a5f0f-202e-40f7-8af0-e843faad0d93?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    title: "Basecamp Personal",
    text: "Manage all your small projects for free",
    comments: "26",
    upVote: "431",
    device: "iPhone",
    id: id++
  },

  {
    image: "https://ph-files.imgix.net/96f4405d-e357-4d10-a473-45a3c718aed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    title: "Basecamp Personal",
    text: "Manage all your small projects for free",
    comments: "64",
    upVote: "254",
    device: "Android",
    id: id++
  }
]


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      pageData: data,
      title: "",
      text: "",
      image: ""
    }
  }

  //fetch api
  componentDidMount() {
    const api = 'https://api.producthunt.com/v1/posts/all?sort_by=votes_count&order=desc&search[featured]=true&per_page=5'
    const token = "Br14AwKXJCdTB-qh6921qxQJJl-C94u3AtKBTvViTS0"
    axios.get(api, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        this.setState({
          data: res.data.posts
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  //submit form 
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.title && this.state.text) {
      this.setState({
        pageData: this.state.pageData.concat({
          image: this.state.image,
          text: this.state.text,
          title: this.state.title,
          upVote: "34034",
          comments: "10",
          device: "Analytics",
          id: id++
        })
      })
    } else {
      alert("NO PRODUCT ADDED!!!")
    }
    this.clear()
  }

  //clear state values
  clear = () => {
    this.setState({
      title: "",
      text: "",
      image: ""
    })
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  updateCount = id => {
    let updatedData = this.state.pageData.map(p => {
      if (p.id === id) {
        p.upVote = Number(p.upVote) + 1;
      }
      return p;
    });
    // this.setState({ pageData: updatedData });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Header />
        <div className="main-right-section">
          <div>
            <Upcoming data={this.state.data} />
            <Card data={this.state.pageData} updateCount={this.updateCount} />
            <Yesterday />
          </div>
          <div>
            <MainSectionRight submit={this.onSubmit} handleChange={this.handleChange} state={this.state.pageData} fullState={this.state} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
