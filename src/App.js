import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Users from "./components/Users";
import Amd from "./components/pages/amd";
import Intel from "./components/pages/intel";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MyComponent from "./components/pages/test";

function App() {

  return (
      <>
          <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                    <Route path="/amd" component={Amd} />
                    <Route path="/intel" component={Intel} />
                    <Route path="/test" component={MyComponent} />
                </Switch>
            </Router>
      </>
  );
}

export default App;
