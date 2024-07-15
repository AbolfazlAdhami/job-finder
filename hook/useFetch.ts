import React, { useState, useEffect } from "react";
import useSWR from "swr";

const useFetch = () => {
  const { data, isLoading, error } = useSWR("/api");

  return {};
};
