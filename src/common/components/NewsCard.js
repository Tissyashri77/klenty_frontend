import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

function NewsCard({ news }) {
  return (
    <Card sx={{ display: "flex", boxShadow: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardActionArea
          onClick={() => {
            window.open(news.url, "_blank");
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {news.name}
            </Typography>
            <Typography color="text.secondary" component="div" fontSize={16}>
              {news.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Typography color="text.secondary" component="div" fontSize={12}>
                Country: {news.country}
              </Typography>

              <Typography color="text.secondary" component="div" fontSize={12}>
                {news.language}, {news.category}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Box>
    </Card>
  );
}

export default NewsCard;
