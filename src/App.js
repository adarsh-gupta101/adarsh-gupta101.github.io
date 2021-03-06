import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Work from "./components/Work";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="app">
      {/* <Banner />
      <About /> */}
      <Header />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/" exact>
              <Banner />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
