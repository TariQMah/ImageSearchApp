import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3e45e92fe50ed8d187edb15fa23358523efd61a4ca8430505f923bd7e05ff2f6"
  }
});
