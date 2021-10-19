import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'; 
import {BrowserRouter, Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import LoginComponent from './components/LoginComponent';
import PrivateRoute from './PrivateRoute';
import HomeComponent from './components/HomeComponent';
import axios from 'axios';
   
axios.defaults.headers.common['authorization'] = sessionStorage.getItem("authorization"); 
function App() {
  return (
    <div>
      <BrowserRouter>
          
          <HeaderComponent></HeaderComponent>
          <div className="container main-content">
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <PrivateRoute path="/employees" exact component={ListEmployeeComponent}></PrivateRoute>
            <PrivateRoute path="/add-employee" exact component={CreateEmployeeComponent}></PrivateRoute>
            <PrivateRoute path="/employees/:id" exact component={UpdateEmployeeComponent}></PrivateRoute>
            
          </div>
          <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
