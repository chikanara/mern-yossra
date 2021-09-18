
import './App.css';
import {BrowserRouter,Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <NavBar/>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/register" component={Register} exact /> 
        <Route path="/profile" component={Profile} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
