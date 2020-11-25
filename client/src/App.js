import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio/index.js";
import Contact from "./pages/Contact/index.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/about" component={Portfolio} />
          <Route exact path="/discover" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;