import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './work.scss';

const card = [
  {
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    desc: 1,
  },
  {
    image:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    desc: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    desc: 3,
  },
];

const work = () => {
  return (
    <div className="work-main">
      <span className="line"></span>
    <h1>Our Work</h1>
    <div className="work-container">
      
    {card.map((card) => {
    return <Card className="cards" sx={{ maxWidth: 250 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={card.image}
      />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {card.desc}
      </Typography>
    </CardContent>
  </Card>
    })}
    
  </div>
  </div>
  );
};

export default work;
