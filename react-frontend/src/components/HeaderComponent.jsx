import React,{ Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";

class HeaderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div> 
                <header>
                    <nav className="nav navbar-expand-md navbar-dark bg-dark">
                        <div><Link to="/" className="header-logo" >Employee Management App</Link></div>
                        <div><Link to="/employees" className="nav-link" >Employees</Link></div>
                        <div><Link to="/add-employee" className="nav-link" >Add Employee</Link></div>
                        {AuthenticationService.isUserLoggedIn() ? <div className="welcome-user">Welcome, {AuthenticationService.getUserName()}</div> : <div className="welcome-user"><Link to="/login" className="nav-link" >Sign In</Link></div>}
                    </nav>
                </header>
            </div>
        )
    }

}

export default HeaderComponent