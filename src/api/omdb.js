import axios from "axios";

const omdbapi =axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: "cdf84453",
  },
});

export default omdbapi;