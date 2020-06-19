import {UserViewModel} from "../viewModel/UserViewModel";
import HttpServices from "../Services/HttpServices";

class UserControllerClass {
    userViewModel = new UserViewModel()

    httpServices = new HttpServices()

    baseURL = "api/";

    async loginUser(email, password) {
        let url = this.baseURL + 'user/login'
        let data = {
            username: email,
            password: password
        }

        let result = await this.httpServices.post(url, data)
        return result
    }

    logoutUser() {

    }

    async signupUser(firstname, lastname, email, password) {
        let url = this.baseURL +'user'
        let data = {
            userName: email,
            firstName: firstname,
            lastName: lastname,
            passwordHash: password
        }

        let result = await this.httpServices.post(url, data)
        return result
    }
}

let UserController = new UserControllerClass()
export default UserController
