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


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      image: null,
      text: null,
      title: null
    }
  }

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


  updateCount = id => {
    let updatedData = this.state.data.map(p => {
      if (p.id === id) {
        p.upVote = Number(p.upVote) + 1;
      }
      return p;
    });
    this.setState({ data: updatedData });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.title && this.state.text) {
      this.setState({
        data: this.state.data.concat({
          image: this.state.image,
          text: this.state.text,
          title: this.state.title,
          upVote: "0",
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

  clear = () => {
    this.setState({
      title: "",
      text: "",
      image: ""
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Header />
        <div className="main-right-section">
          <div>
            <Upcoming data={this.state.data} updateCount={this.updateCount} />
            <Card />
            <Yesterday />
          </div>
          <div>
            <MainSectionRight submit={this.onSubmit} handleChange={this.handleChange} state={this.state} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
