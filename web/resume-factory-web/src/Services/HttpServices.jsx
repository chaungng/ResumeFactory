import React, { Component } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8000";
export default class HttpServices extends Component{
    
    getAxiosInstance(){
        return axios.create({
            baseURL: baseURL,
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    axiosInstance = getAxiosInstance();

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