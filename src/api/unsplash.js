import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GME7L0tXPWYf2Xm3zPQQ_6HDGXbm2Dle5m7gHjh5dkg",
  },
});
