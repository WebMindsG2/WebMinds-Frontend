//Hosts Endpoint Facade

import http from "../../shared/services/http-common.js";

export class HostsApiService{

    //Principal
    getAll(){
        return http.get('/hosts');
    }
    findByDistrict(title){
        return http.get(`/hosts?title=${title}`);
    }



    getById(id){
        return http.get(`/hosts/${id}`);
    }

    create(hostResource){
        return http.post('/hosts',hostResource);
    }

    update(id, hostResource){
        return http.put(`/hosts/${id}`, hostResource);
    }

    delete(id){
        return http.delete(`/hosts/${id}`);
    }



}
