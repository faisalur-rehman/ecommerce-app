import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import StoresScreen from "../StoresScreen";
import * as api from "../../../apis/api";

const Store = () => {
  const { data, request } = useApi(api.getStores);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return <div>{data && <StoresScreen data={data} />}</div>;
};

export default Store;
