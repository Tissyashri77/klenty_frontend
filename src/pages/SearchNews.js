import { Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import SideBar from "../common/components/SideBar";
import SearchIcon from "@mui/icons-material/Search";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { getNewsBySearch } from "../common/utils/apicall";
import ArticleCard from "../common/components/ArticleCard";
import ArticlesList from "../common/components/ArticlesList";

function SearchNews() {
  const [search, setSearch] = useState("");
  const [cancelClicked, setCancelClicked] = useState(false); 
  const [news, setNews] = useState();


  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  };

  const debouncedSearch = useCallback(async (query) => {
    try {
      const data = await getNewsBySearch(query);
      setNews(data)
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  }, []);

  useEffect(() => {
    if (search && !cancelClicked) {
      const delay = 1000;
      const timeoutId = setTimeout(() => {
        debouncedSearch(search);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [search, debouncedSearch, cancelClicked]);

  return (
    <Box>
      <SideBar>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={handleSearch}
          InputProps={{
            endAdornment: (
              <Box mt={1}>
                {search !== "" ? (
                  <IconButton
                    sx={{ marginTop: "-10px" }}
                    onClick={() => {
                      setSearch("");
                      setCancelClicked(true);
                    }}
                  >
                    <CancelOutlinedIcon />
                  </IconButton>
                ) : (
                  <SearchIcon />
                )}
              </Box>
            ),
          }}
        />

        {!cancelClicked && search && news &&
            <Box mt={4}>
                <ArticlesList articles={news}/>
            </Box>
        }

        {search == "" && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={10}
          >
            <Typography>Type something to see News details.</Typography>
          </Box>
        )}
      </SideBar>
    </Box>
  );
}

export default SearchNews;
