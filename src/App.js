import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Blog from './components/Blog';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Landing"
    };
  }

  renderPage() {
    let page = this.state.currentPage
    if (page === "Landing") {
      return (
        <Landing />
      );
    } else if(page === "Blog") {
      return (
        <Blog />
      );
    }
  }

  routeTo(route) {
    this.setState({
      currentPage: route
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          routeToBlog={() => this.routeTo("Blog")}
          routeToLanding={() => this.routeTo("Landing")}
        />

        <div className="content">
          {this.renderPage()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
