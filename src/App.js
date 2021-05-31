import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AddPost from "./components/Post/AddPost/AddPost";
import AllPosts from "./components/Post/AllPosts/AllPosts";
import PostDetails from "./components/Post/PostDetails/PostDetails";
import UpdatePost from "./components/Post/UpdatePost/UpdatePost";
import User from "./components/Profile/User/User";
import Users from "./components/Profile/Users/Users";
export const UserContext = createContext();

function App() {
  const [userId, setUserId] = useState(2);

  return (
    <div className="App">
      <UserContext.Provider value={[userId]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/posts" component={AllPosts} />
            <Route exact path="/posts/:id" component={PostDetails} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/add-post" component={AddPost} />
            <Route exact path="/update-post/:id" component={UpdatePost} />
            <Redirect from="/" to="/posts" />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
