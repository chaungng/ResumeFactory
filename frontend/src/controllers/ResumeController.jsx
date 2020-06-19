import HttpServices from "../Services/HttpServices";
export default class ResumeController{

    httpServices = new HttpServices();

    baseURL = "resumes/"
    async addNewResume(data){

        let result = await this.httpServices.post(this.baseURL + "addnewresume", data);
        return result;
    }

}