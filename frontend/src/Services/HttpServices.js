import axios from 'axios';

// const baseURL = "http://localhost:8000/api";
const baseURL = "http://localhost:8000/";
export default class HttpServices{

    getAxiosInstance(){
        return axios.create({
            baseURL: baseURL,
            headers: {
                "Content-type": "application/json",
                "cache-control": "no-cache",
                "Access-Control-Allow-Origin": "*",
            }
        });
    }

    axiosInstance = this.getAxiosInstance();

    async makeRequest(func, url, data) {
        try {
            let response = await func(url, data)

            return response.data
        } catch {
            return {
                data: null,
                message: 'unknown error',
                success: false
            }
        }
    }

    async get(url){
        console.log('get url', url)
        return await this.makeRequest(this.axiosInstance.get, '/' + url)
    }

    async post(url, data) {
        return await this.makeRequest(this.axiosInstance.post, '/' + url, data)
    }

    async put(url, id, data) {
        return await this.makeRequest(this.axiosInstance.put, '/' + url+'/' + id, data)
    }

    async put1(url, data) {
        return await this.makeRequest(this.axiosInstance.put,  '/' + url, data)
    }

    async delete(url, id) {
        return await this.makeRequest(this.axiosInstance.delete,  '/' + url, id)
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

    delete1 (url){
        return this.axiosInstance.delete('/' + url);
    }

    deleteAll (url){
        return this.axiosInstance.delete('/' + url);
    }
}
