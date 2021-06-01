
import  Nav  from './components/nav';
import './App.css';
import { Route } from 'react-router';
import Contactlist from './components/Contactlist'
import Addcontact from './components/Addcontact';

function App() {
  return (
    <div className="App">
      <Nav/>
       <Route path ="/contact list" component={Contactlist}/>
    <Route path ="/addcontact" component ={Addcontact}/>

    </div>

  );
}

export default App;
