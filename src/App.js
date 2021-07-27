import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Home from './Body/Home/index';
import Register from './Body/Register/Register';
import Login from './Body/Login/Login';
<<<<<<< HEAD
import News from './Body/News/news';
import Countries from './Body/Countries/countries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
=======
import LoginRegister from './Body/signup_signin/login_register';
import Countries from './Body/Countries/countries';
import CountriesDetails from './Body/CountriesDetails/CountriesDetails'
import AddCountries from './Body/AddCountries/addCountries';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
>>>>>>> phantom

function App() {
  return (
    <Router>
      <Header />
      <Switch>
<<<<<<< HEAD
        <Route path='/' exact component={Home} />
        <Route path='/countries' component={Countries} />
        <Route path='/news' component={News} />
        {/* <Route path='/register' component={Register} /> */}
        <Route path='/login' component={Login} />


=======
        <Route path = '/' exact component = {Home}/>
        <Route path = '/countries'  component ={Countries}/>
        <Route path = '/register' component = {Register}/>
        {/* <Route path ='/login/register' component={LoginRegister}/> */}
        <Route path = '/login' component = {Login}/>
        <Route path = '/countriessssss/:id' component = {CountriesDetails}/>
        <Route path ='/addCountries' component={AddCountries}/>
>>>>>>> phantom
      </Switch>
    </Router>
  )


}

export default App;
