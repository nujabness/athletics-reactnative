import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.1.17:8090/",
    headers: {
      "Content-type": "application/json"
    }
  });