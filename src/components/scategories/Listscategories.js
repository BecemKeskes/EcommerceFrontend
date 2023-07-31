import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getScategories } from "../../Features/scategorieSlice";
import Affichescategories from "./Affichescategories";



const Listscategories = () => {
  const dispatch = useDispatch();
  const initFetch = useCallback(() => {
    dispatch(getScategories());
  }, [dispatch]);
  useEffect(() => {
    initFetch();
  }, [initFetch]);
  return (
    <div>
      <Affichescategories />
    </div>
  );
};
export default Listscategories;
