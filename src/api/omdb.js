import axios from "axios";

const omdbapi =axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apiKey: "33cd1715",
  },
});

export default omdbapi;