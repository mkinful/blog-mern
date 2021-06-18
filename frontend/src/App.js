import { NavBar } from './components/navbar/NavBar';
import Home from './components/home/Home';
import Single from './components/pages/single/Single';
import User from './components/pages/user/User';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import SideBar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path= "/about"><SideBar /></Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/user">{user ? <User /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;