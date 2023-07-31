import React, { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getArticlespages } from "../../Features/articleSlice";
import AfficheArticles from "./Affichearticles";

const Listarticles=()=>{

const [currentPage,setCurrentPage] =useState(1);

const itemsPerPage=12;


  const dispatch = useDispatch();
 
  const listproduits=useCallback(()=>{
  const mesparams={
    currentPage:currentPage,
    itemsPerPage:itemsPerPage
  };
  dispatch(getArticlespages(mesparams))
},[currentPage, dispatch])

  useEffect(() => {
    listproduits()
  }, [listproduits])

  return (
    <div>
      <AfficheArticles currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />

    </div>
  );
};
export default Listarticles;
