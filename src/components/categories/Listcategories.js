import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Features/categorieSlice";
import Affichecategories from "./Affichecategories";


const Listcategories = () => {
  const dispatch = useDispatch();
  const initFetch = useCallback(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    initFetch();
  }, [initFetch]);
  return (
    <div>
      <Affichecategories />
    </div>
  );
};
export default Listcategories;
