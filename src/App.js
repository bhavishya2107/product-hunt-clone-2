import React from 'react';
import './App.css';
import Card from './todo'
import Header from './components/header'
import Yesterday from './components/yesterday'
import Upcoming from './components/upcoming'
import MainSectionRight from './components/MainSectionRight'
import './styles/card-left.scss'

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
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data,
      image: null,
      text: null,
      title: null
    }
  }

  updateCount = id => {
    let updatedData = this.state.data.map(p => {
      if (p.id === id) {
        p.upVote = Number(p.upVote) + 1;
      }
      return p;
    });
    this.setState({ data: updatedData });
  };

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
      alert("Form cannot be empty!!!")
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
