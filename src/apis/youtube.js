import axios from "axios";

const KEY = "AIzaSyC9zdGVvuRsKuvo3ub0ez0ed5WyyfNSfRU";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  type: "video",
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
