import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleStoreScreen from "./SingleStoreScreen";
import * as api from "../../../apis/api";
import useApi from "../../../hooks/useApi";

const SingleStore = () => {
  const { id } = useParams();
  const { data, request } = useApi(api.getSingleStore);
  const allArticles = useApi(api.getArticles);
  useEffect(() => {
    async function fetchData() {
      try {
        await request({ storeId: id });
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        await allArticles.request({ storeId: id });
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      {data && allArticles.data && (
        <SingleStoreScreen data={data} articles={allArticles.data} />
      )}
    </div>
  );
};

export default SingleStore;
