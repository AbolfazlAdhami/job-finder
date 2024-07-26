import axios from "axios";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

const axiosConfig = axios.create({
  baseURL: "https://jsearch.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "5365562dc8msh06f2cc3162c0280p1fdfe0jsn6f7d79da7344",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
});

const fetcher = (endpoint: string, query: object) => axiosConfig.get(endpoint, { params: query }).then((res) => res.data.data);

const useFetch = (url: string, query: object) => {
  const { data, isLoading, error } = useSWR([url, query], ([url, query]) => fetcher(url, query));

  return { data, isLoading, error };
};

export default useFetch;
