import axios from 'axios';

const baseURL = "http://localhost:8000/api";
export default class HttpServices{
    
    getAxiosInstance(){
        return axios.create({
            baseURL: baseURL,
            headers: {
                "Content-type": "application/json",
                "cache-control": "no-cache"
            }
        });
    }

    axiosInstance = this.getAxiosInstance();

    async makeRequest(func, url, data) {
        try {
            return await func(url, data)
        } catch {
            return null
        }
    }

    async get(url){
        return await this.makeRequest(this.axiosInstance.get, '/' + url)
    }

    async post(url, data) {
        return await this.makeRequest(this.axiosInstance.post, '/' + url, data)
    }

    getAllData (url){
        return this.axiosInstance.get('/' + url);
    } 

    getDataById (url, id){
        return this.axiosInstance.get('/' + url + '/' + id);
    }

    create (url, data){
        return this.axiosInstance.post('/' + url, data);
    }

    update (url, id, data){
        return this.axiosInstance.put('/' + url + '/' + id, data);
    }

    delete (url, id){
        return this.axiosInstance.delete('/' + url + '/' + id);
    }

    deleteAll (url){
        return this.axiosInstance.delete('/' + url);
    }
}