import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + "employees");
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + "employees",employee );
    }

    getEmployee(id){
        return axios.get(EMPLOYEE_API_BASE_URL+ "employees/"+id);
    }

    updateEmployee( id , employee){
        return axios.put(EMPLOYEE_API_BASE_URL+"employees/"+id , employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+ "employees/"+id);
    }
}

export default new EmployeeService()