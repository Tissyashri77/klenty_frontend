import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function ArticleCard({ article }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: { xs: "100%", md: "30%" } }}>
      <CardActionArea
        onClick={() => {
          window.open(article.url, "_blank");
        }}
      >
        {article.urlToImage && (
          <CardMedia
            component="img"
            height="200"
            image={article.urlToImage}
            alt={article.title}
          />
        )}
        <CardContent sx={{ height: 130 }}>
          <Typography
            gutterBottom
            variant="para"
            fontWeight="600"
            component="div"
          >
            {article.title}
          </Typography>
          {article.description ? (
            <Typography variant="para" color="text.secondary">
              {article.description.length < 150
                ? article.description
                : `${article.description.slice(0, 150)}...`}
            </Typography>
          ) : <Typography variant="para" color="text.secondary" fontSize={12}>No Description</Typography>}
        </CardContent>

        <CardContent
          sx={{
            borderTop: "0.01px solid rgba(0, 0, 0, 0.2)",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="text.secondary" fontSize="11px">
            {moment(article.publishedAt).format("lll")}
          </Typography>

          {article.source.name && (
            <Typography color="text.secondary" fontSize="10px">
              From {article.source.name}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ArticleCard;
