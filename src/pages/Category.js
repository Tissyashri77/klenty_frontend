import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../common/components/NewsCard";
import SideBar from "../common/components/SideBar";
import { getNewsCategorywise } from "../common/utils/apicall";

function Category() {
  const params = useParams();
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true)
      try {
        const data = await getNewsCategorywise(params.category);
        setNews(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching top headlines:", error);
      }
    };

    fetchDetails();
  }, [params.category]);

  news && console.log(news);

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
      <SideBar>
        <Box sx={{display:"flex", flexDirection:"column", gap:3}}>
          <Typography sx={{textTransform:"capitalize", fontSize:20, fontWeight:"700", textDecoration:"underline"}}>{params.category} News</Typography>
          {loading ? <Loading/> : 
            news.map((newsItem, index) => (
              <NewsCard news={newsItem} key={index} />
            ))
          }
        </Box>
      </SideBar>
    </Box>
  );
}

export default Category;
