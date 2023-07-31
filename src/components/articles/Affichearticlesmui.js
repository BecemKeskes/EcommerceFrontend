import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import {useSelector} from "react-redux"
import { Table } from 'react-bootstrap';

const Affichearticlesmui = () => {const {articles,isLoading,error} = useSelector((state)=>state.storearticles);
const renderArticles = () => {
if (isLoading) return <center><ReactLoading type='spokes' color="red"
height={'8%'} width={'8%'} /></center>
if (error) return <p>Impossible d'afficher la liste des articles...</p>
return <React.Fragment>
      
    <Table className="table-striped table bordered">
      <thead className="thead-dark">
        <tr>
          <th>Code produit</th>
          <th>Image</th>
          <th>Reference</th>
          <th>Marque</th>
          <th>Designation</th>
          <th>Prix</th>
          <th>Quantite en stock</th>
          <th>Nom sous categorie</th>
          <th>Supprimer</th>
          <th>Modifier</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((art, index) => (
          <tr key={index}>
            <td>{art._id}</td>
            <td>
              <img src={art.imageart} width={80} height={80} />
            </td>

            <td>{art.reference}</td>
            <td>{art.marque}</td>

            <td>{art.designation}</td>
            <td>{art.prix}</td>
            <td>{art.qtestock}</td>
            <td>{art.scategories}</td>
          
          </tr>
        ))}
      </tbody>
    </Table>


</React.Fragment>
}

return (
<div className="container">
{renderArticles()}
</div>
)
}
export default Affichearticlesmui