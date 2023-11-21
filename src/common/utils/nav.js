import BusinessIcon from "@mui/icons-material/Business";
import AttractionsIcon from "@mui/icons-material/Attractions";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const navdetails = [
  
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Search",
    icon: <ManageSearchIcon />,
    link: "/news/search",
  },
  {
    title: "Business",
    icon: <BusinessIcon />,
    link: "/category/business",
  },
  {
    title: "Entertainment",
    icon: <AttractionsIcon />,
    link: "/category/entertainment",
  },
  {
    title: "Health",
    icon: <HealthAndSafetyIcon />,
    link: "/category/health",
  },
  {
    title: "Science",
    icon: <PsychologyIcon />,
    link: "/category/science",
  },
  {
    title: "Sports",
    icon: <SportsBasketballIcon />,
    link: "/category/sports",
  },
  {
    title: "Technology",
    icon: <SyncAltIcon />,
    link: "/category/technology",
  },
];


export {navdetails}