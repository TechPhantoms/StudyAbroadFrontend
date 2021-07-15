import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Home from './Body/Home/index';
import Register from './Body/Register/Register';
import Login from './Body/Login/Login';
import News from './Body/News/news';
import Countries from './Body/Countries/countries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/countries' component={Countries} />
        <Route path='/news' component={News} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />


      </Switch>
    </Router>
  )


}

export default App;
