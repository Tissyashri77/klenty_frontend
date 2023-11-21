import { Box } from "@mui/system";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { getTopHeadlines } from "./common/utils/apicall";
import SearchNews from "./pages/SearchNews";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "/category/:category",
    element:(
      <Category/>
    )
  },
  {
    path: "/news/search",
    element:(
      <SearchNews/>
    )
  }
]);


function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
