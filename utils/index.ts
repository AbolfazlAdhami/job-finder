import axios from "axios";

export const checkImageURL = (url: string) => {
  if (!url) return false;
  else {
    const pattern = new RegExp("^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$", "i");
    return pattern.test(url);
  }
};

export const axiosConfig = axios.create({
  baseURL: "https://jsearch.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "5365562dc8msh06f2cc3162c0280p1fdfe0jsn6f7d79da7344",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
});
