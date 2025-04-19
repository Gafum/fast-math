import TopicBtn from "./Topic-btn/Topic-btn";
import styles from "./Home.module.css";
import { testList } from "../../data/testList";
import { ScreensAnimation } from "../../assets/CustomData/animation";
import { motion } from "framer-motion";
import { getLanguage } from "../../functions/getLanguage";

const colorList = [
   "#493066",
   "#303A66",
   "#5B3066",
   "#3C4880",
   "#66304E",
   "#304A77",
   "#5E2C48",
   "#2C446E",
   "#5B3066",
   "#3C4880",
   "#493066",
   "#303A66",
];

function Home() {
   return (
      <motion.div
         className={`${styles.cardsList} ${styles.inMenu}`}
         {...ScreensAnimation}
      >
         {testList.map((element, index) => (
            <TopicBtn
               key={element.id}
               name={getLanguage().testList[index].name}
               id={element.id}
               color={colorList[index]}
            />
         ))}
      </motion.div>
   );
}

export default Home;
