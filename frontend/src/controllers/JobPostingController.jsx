import HttpServices from "../Services/HttpServices";

class JobPostingControllerClass {

  httpServices = new HttpServices();

  baseURL = "jobs/";

  async getJobPostings() {
    let result = await this.httpServices.get(this.baseURL + "all");
    return result;
  }
}

let JobPostingController = new JobPostingControllerClass();
export default JobPostingController;
