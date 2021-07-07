import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Register from './Body/Register/Register';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      {/* <switch> */}
        {/* <Route path = '/register' component = {Register}/> */}
      {/* </switch> */}
    </Router>
  )

  
}

export default App;
