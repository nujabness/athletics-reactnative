import http from "../http-common";

class DataService {
  getAllEvents() {
    return http.get("/epreuve");
  }

  participeEvents(body){
    return http.post("/participer" , body)
  }

  annulerParticipation(body){
    return http.post("/annuler/participation" , body)
  }

  getParticipations(body){
    return http.post("/participation" , body)
  }

  login(body){
    return http.post("/login" , body)
  }

  register(body){
    return http.post("/register" , body)
  }

  detailsUser(body){
    return http.post("/user/details" , body)
  }
}

export default new DataService();