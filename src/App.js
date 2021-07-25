import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Home from './Body/Home/index';
import Register from './Body/Register/Register';
import Login from './Body/Login/Login';
import LoginRegister from './Body/signup_signin/login_register';
import Countries from './Body/Countries/countries';
import CountriesDetails from './Body/CountriesDetails/CountriesDetails'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/countries'  component ={Countries}/>
        {/* <Route path = '/register' component = {Register}/> */}
        <Route path ='/login/register' component={LoginRegister}/>
        <Route path = '/login' component = {Login}/>
        <Route path = '/countriessssss/:id' component = {CountriesDetails}/>
      </Switch>
    </Router>
  )

  
}

export default App;
