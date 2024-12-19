import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "../Profile/ui/Profile";
import ProductForm from "../../ProductForm/ui/ProductForm";
import PopularSetsForm from "../../PopularSets/ui/PopularSets";
import NewsForm from "../../NewsForm/ui/NewsForm";
import lineAdmin from "../../../shared/assets/svg/lineAdmin.svg";
import { Link } from "react-router-dom";
import AssembleSetForm from "../../AssembleSetForm/ui/AssembleSetForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [openForm, setOpenForm] = React.useState(null); // Track which form is open
  const [buttonText, setButtonText] = React.useState("Редактировать");

  const navigateArray = [
    { path: "/product-form", name: "Акции", component: <ProductForm /> },
    { path: "/Dashboard/PopularSetsFrom", name: "Популярные наборы", component: <PopularSetsForm /> },
    { path: "/Dashboard/News", name: "Новости", component: <NewsForm /> },
  
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpenForm(null); // Close all forms when changing tabs
    setButtonText("Редактировать");
  };

  const handleEditClick = (path) => {
    setOpenForm(prev => (prev === path ? null : path)); // Toggle the form based on the path
    setButtonText(prev => (prev === "Редактировать" ? "Закрыть" : "Редактировать"));
  };

  return (
    <Box
      sx={{
        flexGrow: 2,
        bgcolor: "background.paper",
        display: "flex",
        height: 610,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: 200 }}
      >
        <Tab label="Главная" {...a11yProps(0)} />
        <Tab label="Профиль" {...a11yProps(1)} />
      </Tabs>
      <div className="ml-5">
        {value === 0 && (
          <>
            {navigateArray.map((item, index) => (
              <TabPanel
                key={index}
                className="w-[1150px] shadow-xl mt-10 border-slate-200 rounded-md border-2"
                value={value}
                index={0}
              >
                <div className="flex justify-between items-center"  onClick={() => handleEditClick(item.path)}>
                  <Link to={item.path}>
                    <h2>{item.name}</h2>
                  </Link>
                  <div className="flex gap-2 items-center">
                    <button
                     
                      className={`cursor-pointer outline-none ${
                        openForm === item.path && buttonText === "Закрыть"
                          ? "bg-[#E7426A] text-white px-6 py-2 rounded-md transition"
                          : ""
                      }`}
                    >
                      {buttonText}
                    </button>
                    {buttonText === "Редактировать" && <img src={lineAdmin} alt="" />}
                  </div>
                </div>
                {openForm === item.path && item.component}
              </TabPanel>
            ))}
          </>
        )}
        {value === 1 && (
          <TabPanel value={value} index={1}>
            <Profile />
          </TabPanel>
        )}
      </div>
    </Box>
  );
}
