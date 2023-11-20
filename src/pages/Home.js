import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArticlesList from "../common/components/ArticlesList";
import SideBar, { drawerWidth } from "../common/components/SideBar";
import { getTopHeadlines } from "../common/utils/apicall";

function Home() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getTopHeadlines();
        setArticles(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching top headlines:", error);
      }
    };

    fetchDetails();
  }, []);

  const Loading = () => {
    return (
      <Box
        sx={{
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  };

  return (
    <Box>
      <SideBar>{articles ? <ArticlesList articles={articles}/> : <Loading />}</SideBar>
    </Box>
  );
}

export default Home;
