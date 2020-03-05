import React from 'react';
import './App.css';
import Card from './todo'
import Header from './components/header'
import Yesterday from './components/yesterday'
import Upcoming from './components/upcoming'
import MainSectionRight from './components/MainSectionRight'
import './styles/card-left.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-right-section">
        <div>
          <Upcoming />
          <Card />
          <Yesterday />
        </div>
        <div>
          <MainSectionRight />
        </div>
      </div>
    </div>
  )
}

export default App;
