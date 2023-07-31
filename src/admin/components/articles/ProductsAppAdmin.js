import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../../Features/articleSlice";
import AfficheArticleTable from './AfficheArticleTable';
import Createarticles from './Createarticles';

const ProductsAppAdmin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getArticles());
    },[])
    return (
    <div>
        <Createarticles/>
      
<AfficheArticleTable />

  
    </div>
    )
    }
    export default ProductsAppAdmin