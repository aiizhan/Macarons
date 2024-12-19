import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tabls() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#E7426A",
            },
          }}
        >
          <Tab
            label="Описание"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                color: "#E7426A",
                color: "gray",
              },
            }}
          />
          <Tab
            label="Состав и пищевая ценность"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                color: "#E7426A",
                color: "gray",
              },
            }}
          />
          <Tab
            label="Условия и срок хранения "
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": {
                color: "#E7426A",
                color: "gray",
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <p>Текстовая информация и таблички.</p>
        <p>Для примера рыба-текст</p>
        <p className="pt-5">
          {" "}
          Банальные, но неопровержимые выводы, а также представители современных
          социальных резервов смешаны с не уникальными данными до степени
          совершенной неузнаваемости, из-за чего возрастает их статус
          бесполезности. Сложно сказать, почему активно развивающиеся страны
          третьего мира неоднозначны и будут указаны как претенденты на роль
          ключевых факторов. Являясь всего лишь частью общей картины, диаграммы
          связей призывают нас к новым свершениям, которые, в свою очередь,
          должны быть своевременно верифицированы.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <p>1. Мука миндальная, сахар, белок яичный, ганаш</p>
        <p>
          2. Мука пшеничная, маргарин, меланж яичный, соль, сахар, заварной
          крем, посыпка
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <p>
          Мы рекомендуем наслаждаться вкусом макарун первые 72 часа после
          покупки. Далее они могут начать терять свои вкусовые качества и
          текстуру.
        </p>
        <p>
          Срок хранения в морозильной камере до 90 дней, в холодильнике: для
          макаронс 14 дней, для эклеров 36 часов.
        </p>
      </CustomTabPanel>
    </Box>
  );
}
