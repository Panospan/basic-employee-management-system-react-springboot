import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(EMPLOYEE_API_BASE_URL+`basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    registerSuccessfulLogin(username, password){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        sessionStorage.setItem("authorization",this.createBasicAuthToken(username,password) ); 
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password));
    }

    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                config.headers.authorization = token
                }
                return config;
            }
        )
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getUserName(){
        return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }
}

export default new AuthenticationService()