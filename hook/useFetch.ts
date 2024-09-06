import { axiosConfig } from "@/utils";
import useSWR from "swr";

const fetcher = (endpoint: string, query: object) => axiosConfig.get(endpoint, { params: query }).then((res) => res.data.data);

const useFetch = (url: string, query: object) => {
  const { data, isLoading, error, mutate } = useSWR([url, query], ([url, query]) => fetcher(url, query), {});

  return { data, isLoading, error, mutate };
};

export default useFetch;
