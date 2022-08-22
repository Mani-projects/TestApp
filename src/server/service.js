import axios from "axios";
import { URL } from "./url";

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export class AppService {
  constructor(path, params) {
    this.path = path;
    this.params = params;
  }

  async getMethod() {
    try {
      let res = await axiosInstance.get(this.path);
      let final_response = res.data.data;
      return final_response;
    } catch (err) {
      throw this.exceptionHandling(err);
    }
  }

  exceptionHandling(error) {
    let errorResponse;
    if (error.response && error.response.data) {
      errorResponse = error.response.data;
    } else if (error.request) {
      errorResponse = error.request.message || error.request.statusText;
    } else {
      errorResponse = error.message;
    }
    throw errorResponse;
  }
}
