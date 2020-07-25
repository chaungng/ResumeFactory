import HttpServices from "../Services/HttpServices";

class JobPostingControllerClass {

  httpServices = new HttpServices();

  baseURL = "jobs/";

  async getJobPostings() {
    let result = await this.httpServices.get(this.baseURL + "all");
    return result;
  }

  async searchJobs(data) {
    let result = await this.httpServices.post(this.baseURL + "search", data);
    return result;
  }
}

let JobPostingController = new JobPostingControllerClass();
export default JobPostingController;
