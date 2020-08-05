import HttpServices from "../Services/HttpServices";

class SavedJobsControllerClass{

    httpServices = new HttpServices();

    baseURL = "savedjobs/";

    async add(data){
        console.log('add')
        let result = await this.httpServices.post(this.baseURL, data);
        console.log(result);
        return result.success;
    }

    async delete(id){
        console.log('delete')
        let result = await this.httpServices.delete1(this.baseURL + id);
        console.log(result);
        return result.success;
    }

    async getAll (userId){
        let result = await this.httpServices.get( this.baseURL + userId);
        // console.log('get all saved jobs', result);
        return result.data;
    }

}
let SavedJobsController = new SavedJobsControllerClass();
export default SavedJobsController;
