import React,{ Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees : res.data }) ; 
        });
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
    }

    render(){
        return ( 
            <div>
                <div className="employee-list-header">
                    <h2 className="text-center">Employee List</h2>
                    <button className="btn btn-primary" onClick={() => { this.props.history.push("/add-employee")}}>Add Employee </button>
                </div>
                
                <div className="row">
                   
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                         {this.state.employees.map(employee => 
                             <tr key={employee.id}>
                                <td> 
                                    {employee.firstName}
                                </td>
                                <td> 
                                    {employee.lastName}
                                </td>
                                <td> 
                                    {employee.emailId}
                                </td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => {this.props.history.push("/employees/"+employee.id)}}>Edit</button>
                                    <button className="btn btn-danger" onClick={ () => this.deleteEmployee(employee.id)}>Delete</button> 
                                </td>
                             </tr>
                         )}
                        </tbody>
                    </table>
                </div>
                
                
            </div>
        )
    }
}

export default ListEmployeeComponent