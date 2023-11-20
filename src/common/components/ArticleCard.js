import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function ArticleCard({article}) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: {xs:"100%", md:"30%"} }}>
      <CardActionArea onClick={() => {
        window.open(article.url, '_blank');
      }}>
        <CardMedia
          component="img"
          height="200"
          image={article.urlToImage}
          alt={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="para" fontWeight="600" component="div">
            {article.title}
          </Typography>
          <Typography variant="para" color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ArticleCard;
