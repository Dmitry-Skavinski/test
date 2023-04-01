import React, { Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./index.css";
import BlogCase from "./component/BlogCase";
import AdditinalPanel from "./component/AdditionalPanel";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <BlogCase/>
        <AdditinalPanel/>
        <Footer/>
      </div>
    );
  }
}

export default App;
