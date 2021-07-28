import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Home from './Body/Home/index';
import Register from './Body/Register/Register';
import Login from './Body/Login/Login';
import Countries from './Body/Countries/countries';
// import LoginRegister from './Body/signup_signin/login_register';
import CountriesDetails from './Body/CountriesDetails/CountriesDetails'
import AddCountries from './Body/AddCountries/addCountries';
import NewsandPolicy from './Body/NewsandPolicy/news';
import AddNews from './Body/AddNews/addNews';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/login' component = {Login}/>
        <Route path = '/register' component = {Register}/>
        <Route path='/news' component={NewsandPolicy} />
        <Route path='/addNews' component={AddNews}/>
        <Route path = '/countries'  component ={Countries}/>
        <Route path = '/countriessssss/:id' component = {CountriesDetails}/>
        <Route path ='/addCountries' component={AddCountries}/>
        {/* <Route path ='/login/register' component={LoginRegister}/> */}

      </Switch>
    </Router>
  )


}

export default App;
