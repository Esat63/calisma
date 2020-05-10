import React, { Component } from 'react';
import './App.css';
import Notfound from './Components/Notfound'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Post from './Components/Post'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
                <Navbar />
                <Carousel/>
              <div className="container"  >
              <Switch>
              <Route exact path="/">
                <Post />
                </Route>

                <Route exact path="/about">
                <About />
                </Route>

                <Route exact path="/contact">
                <Contact />
                </Route>

                <Route path="*">
                <Notfound />
                </Route>
                </Switch>
              </div>
              
                <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
