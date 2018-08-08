import React, { PureComponent } from "react";
import "./App.css";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Body />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
