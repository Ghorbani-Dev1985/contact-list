import http from "./httpService";

export default function getSingleContact(id){
    return http.get(`/contacts/${id}`);
}