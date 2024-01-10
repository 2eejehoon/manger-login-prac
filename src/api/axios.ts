import axios from "axios";

const baseURL = "https://ahelios.com";

const Axios = axios.create({
  baseURL,
  withCredentials: true,
});

export default Axios;
