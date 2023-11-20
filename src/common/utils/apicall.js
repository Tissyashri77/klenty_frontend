import axios from "axios";

const getTopHeadlines = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=100`
      );
  
      return response.data.articles;
    } catch (error) {
      console.error("Error fetching top headlines:", error);
      throw error;
    }
  };

export {getTopHeadlines}