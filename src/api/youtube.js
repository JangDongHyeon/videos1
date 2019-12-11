import axios from "axios";
const KEY = "AIzaSyC65A9-WN3A2e5T4MR5DykAKnmfsm4Iaig";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
