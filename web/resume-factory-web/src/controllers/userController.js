import {UserViewModel} from "../viewModel/userViewModel";
import HttpServices from "../Services/HttpServices";

class UserControllerClass {
    userViewModel = new UserViewModel()

    httpServices = new HttpServices()

    async loginUser(email, password) {
        let url = 'user/login'
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
        let url = 'user'
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