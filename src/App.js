import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AllPosts from "./components/Post/AllPosts/AllPosts";
import PostDetails from "./components/Post/PostDetails/PostDetails";
import User from "./components/Profile/User/User";
import Users from "./components/Profile/Users/Users";
export const UsersPostsContext = createContext();

function App() {
  const [userId, setUserId] = useState(2);

  return (
    <div className="App">
      <UsersPostsContext.Provider value={[userId]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/posts" component={AllPosts} />
            <Route exact path="/posts/:id" component={PostDetails} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={User} />
            <Redirect from="/" to="/posts" />
          </Switch>
        </Router>
      </UsersPostsContext.Provider>
    </div>
  );
}

export default App;
