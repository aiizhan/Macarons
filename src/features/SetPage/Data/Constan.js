import color1 from "../../../shared/assets/img/Group 1.png";
import color2 from "../../../shared/assets/img/Group 2.png";
import color4 from "../../../shared/assets/img/Group 4.png";

import svg1 from "../../../shared/assets/svg/color1.svg";
import svg2 from "../../../shared/assets/svg/color2.svg";
import svg4 from "../../../shared/assets/svg/color4.svg";

export const cardData = [
    {
        color: color1,
        svg: svg1,
        title: "Готовые наборы →",
        description: ["Готовые наборы со скидкой.", "Вы можете подобрать набор на подходящий случай."],
        path: "/productSet"
    },
    {
        color: color2,
        svg: svg2,
        title: "Собрать свой набор →",
        description: ["Выбрать количество макарун, и выбрать вкусы"],
        path: "/assemble"
    },
    {
        color: color4,
        svg: svg4,
        title: "Свадебные предложения →",
        description: ["Нежные пирожные макаронс с разными вкусами для", "украшения вашего свадебного торжества"],
        path: "/WeddingSet"
    }
];
