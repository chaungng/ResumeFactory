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
        console.log('Complete')
        console.log(result)
    }

    logoutUser() {

    }

    signUpUser() {

    }
}

let UserController = new UserControllerClass()
export default UserController