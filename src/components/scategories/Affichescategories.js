import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

const Affichescategories = () => {
  const { scategories, isLoading, error } = useSelector(
    (state) => state.storescategories);

  const renderScategories = () => {
    if (isLoading)
      return (
        <center>
          <ReactLoading type="balls" color="blue" height={"8%"} width={"8%"} />
        </center>
      );
    if (error) return <p>Impossible d'afficher la liste des scategories...</p>;
    return (
      <React.Fragment>
        {scategories && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
            }}
          >
            {scategories.map((cat, ind) => {
              return (
                <Card sx={{ maxWidth: "auto", margin: 1 }} key={ind}>
                  <CardMedia
                    component="img"
                    alt="image"
                    height="160"
                    image={cat.imagescategorie}
                  />
                  <CardContent>
                    
                    <Typography gutterBottom variant="h6" component="div">
                      {cat.nomscategorie}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  };
  return <div className="container">
  {renderScategories()}
  </div>
};

export default Affichescategories;
