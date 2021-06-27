import { NavBar } from './components/navbar/NavBar';
import Home from './components/home/Home';
import Single from './components/pages/single/Single';
import Champ from './components/pages/single/Champ';
import Surf from './components/pages/single/Surf';
import Photo from './components/pages/single/Photo';
import Bob from './components/pages/single/Bob';
import Sord from './components/pages/single/Sord';
import Rock from './components/pages/single/Rock';
import Kiki from './components/pages/single/Kia';
import Fanfare from './components/pages/single/Fan';
import User from './components/pages/user/User';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import SideBar from './components/sidebar/Sidebar';
import { Context } from './context/Context';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { user } = useContext(Context);
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
          <Route path="/post/:bebop"><Single /></Route>
          <Route path="/smooth/:champ"><Champ /></Route>
          <Route path="/waves/:surf"><Surf /></Route>
          <Route path="/memory/:photots"><Photo /></Route>
          <Route path="/rnb/:bob"><Bob /></Route>
          <Route path="/storm/:sord"><Sord /></Route>
          <Route path="/train/:rocky"><Rock /></Route>
          <Route path="/kiki/:lullaby"><Kiki /></Route>
          <Route path="/fanfare/:comics"><Fanfare /></Route>
          </Switch>
    </Router>
    
  );
}

export default App;