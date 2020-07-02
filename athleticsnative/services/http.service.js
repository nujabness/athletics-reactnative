import axios from "../http-common";

class DataService {
  getAllEvents(headers) {
    return axios.get("/epreuve", headers);
  }

  participeEvents(body, headers){
    return axios.post("/participer" , body, headers)
  }

  annulerParticipation(body, headers){
    return axios.post("/annuler/participation" , body, headers)
  }

  getParticipations(body, headers){
    return axios.post("/participation" , body, headers)
  }

  register(body, headers){
    return axios.post("/register" , body, headers)
  }

  detailsUser(body, headers ){
    return axios.post("/user/details" , body, headers )
  }

  getAllUsers(headers){
    return axios.get("/users", headers )
  }

  supprimerEvents(body, headers){
    return axios.post("/epreuve/delete", body, headers)
  }

  supprimerUsers(body, headers){
    return axios.post("/user/delete", body, headers)
  }

  createEvents(body, headers){
    return axios.post("/epreuve/create", body, headers)
  }
}

export default new DataService();