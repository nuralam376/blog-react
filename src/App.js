import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import AllPosts from "./components/AllPosts/AllPosts";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/posts" component={AllPosts} />
        </Switch>
        <Redirect from="/" to="/posts" />
      </Router>
    </div>
  );
}

export default App;
