import { Component } from "react";
import AuthenticationService from "../services/AuthenticationService";

class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = (event) =>{
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    componentDidMount(){
        AuthenticationService.isUserLoggedIn() && this.props.history.replace("/employees")
    }

    loginClicked = () =>{
        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password).then( () =>{
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            window.location.reload();

        }).catch(() => {
            this.setState({hasLoginFailed : true , showSuccessMessage : false })
        })
    }

    render() {
        return (
            <div className="row">
                <div className="card col-md-6 offset-md-3 add-employee-form">
                    <h2 className="text-center">Please Log In </h2>
                    <div className="card-body">
                        <div className="form">
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                            <div className="form-group">
                            <label>UserName  </label>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Password </label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>

                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                        </div>
                    </div>
                    
                </div>
            </div>    
                
        )
    }
    

}


export default LoginComponent