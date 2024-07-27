import { axiosConfig } from "@/utils";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (endpoint: string, query: object) => axiosConfig.get(endpoint, { params: query }).then((res) => res.data.data);

const useFetch = (url: string, query: object) => {
  const { data, isLoading, error, mutate } = useSWR([url, query], ([url, query]) => fetcher(url, query), {});

  return { data, isLoading, error };
};

export default useFetch;
