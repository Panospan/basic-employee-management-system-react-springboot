import { Component } from "react";
import EmployeeService from "../services/EmployeeService";


class UpdateEmployeeComponent extends Component{


    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            addFailed: false
        };
    }

    componentDidMount(){

        EmployeeService.getEmployee(this.props.match.params.id).then((res) =>{

                this.setState({firstName : res.data.firstName , lastName : res.data.lastName , emailId : res.data.emailId }) ; 

        });  
    }

    componentWillUnmount() {

    }

    firstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
    }

    lastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
    }

    emailIdHandler = (event) => {
        this.setState({emailId : event.target.value});
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName , emailId: this.state.emailId};
        

        EmployeeService.updateEmployee(this.props.match.params.id, employee).then((res) => {
            this.props.history.push("/employees");
        }).catch((err) => { 
            this.setState({ addFailed:true});
        });
    }

    cancel = () =>{
        this.props.history.push("/employees");
    }

    render(){
        return (
            <div className="row">
                <div className="card col-md-6 offset-md-3 add-employee-form">
                    <h2 className="text-center">Update Employee </h2>
                    <div className="card-body">
                        <form className="form">
                            {this.state.addFailed && <div className="danger">Something went wrong! </div> }
                            <div className="form-group">
                                <label>First Name:  </label>
                                <input type="text" id="fname" name="fname"  value={this.state.firstName} onChange={this.firstNameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name </label>
                                <input type="text" id="lname" name="lname" value={this.state.lastName} onChange={this.lastNameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Email </label>
                                <input type="email" id="email" name="email" value={this.state.emailId} onChange={this.emailIdHandler}/>
                            </div>

                            <button  type="submit" className="btn btn-success" onClick={ this.updateEmployee} > Update </button>
                            <button type="button" className="btn btn-danger" onClick={ this.cancel }> Cancel </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        
        ) 
    }






}

export default UpdateEmployeeComponent