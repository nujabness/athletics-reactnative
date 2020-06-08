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
}

export default new DataService();