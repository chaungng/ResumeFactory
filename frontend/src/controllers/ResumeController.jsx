import HttpServices from "../Services/HttpServices";

class ResumeControllerClass{

    httpServices = new HttpServices();

    baseURL = "resumes/";

    async addNewResume(data){

        let result = await this.httpServices.post(this.baseURL + "addnewresume", data);
        console.log(result);
        return result;
    }

    async getAllResumes (){
        let result = await this.httpServices.get(this.baseURL + "allResumes");
        console.log(result);
        return result;
    }

//resumes/resumes?userId=1
    async getResumesByUserId (userId){
        let result = await this.httpServices.get( this.baseURL +"resumes?userId=" +userId);
        // console.log(result);
        return result;
    }

    async getCountResumeByUserId (userId){
        let result = await this.httpServices.get( this.baseURL +"count?userId=" +userId);
        return result;
    }

    async addNewResume(data){

        let result = await this.httpServices.post(this.baseURL + "addnewresume", data);
        console.log(result);
        return result;
    }

    async addPersonalInfo(data){
        
    }

}
let ResumeController = new ResumeControllerClass();
export default ResumeController;
