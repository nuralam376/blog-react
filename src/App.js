import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import AllPosts from "./components/AllPosts/AllPosts";
import Header from "./components/Header/Header";
import PostDetails from "./components/PostDetails/PostDetails";
import User from "./components/Profile/User/User";
export const UsersPostsContext = createContext();

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [userId, setUserId] = useState(2);

  return (
    <div className="App">
      <UsersPostsContext.Provider value={[allPosts, setAllPosts, userId]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/posts" component={AllPosts} />
            <Route exact path="/posts/:id" component={PostDetails} />
            <Route exact path="/profile" component={User} />
          </Switch>
          <Redirect from="/" to="/posts" />
        </Router>
      </UsersPostsContext.Provider>
    </div>
  );
}

export default App;
