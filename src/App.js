import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CountryDetail from "./components/Home/CountryDetail/CountryDetail";
import Home from "./components/Home/Home"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/about/:alpha2Code">
          <CountryDetail></CountryDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
