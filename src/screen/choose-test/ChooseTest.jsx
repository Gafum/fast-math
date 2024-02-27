import { useNavigate, useParams } from "react-router-dom";
import ChooseItem from "./chooseItem/ChooseItem";
import styles from "./ChooseTest.module.css";
import { testList } from "../../data/testList";
import { motion } from "framer-motion";
import { ScreensAnimation } from "../../assets/CustomData/animation";

function ChooseTest() {
   const { whatTopic } = useParams();
   const navigate = useNavigate();

   if (!testList.find(({ id }) => id === whatTopic)) {
      return (
         <h1
            className={styles.card}
            style={{ backgroundColor: "#912C2C" }}
            onClick={() => navigate("/")}
         >
            Тема не знайдена! Перевірте чи правильно введене посилання!
         </h1>
      );
   }
   return (
      <motion.div className={styles.cardList} {...ScreensAnimation}>
         <ChooseItem
            where={"basic-test"}
            text={"Простий тест"}
            myColor={"#912C2C"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"write-test"}
            text={"Вписати відповідь"}
            myColor={"#2C9182"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"true-false"}
            text={"Правда Хиба"}
            myColor={"#2C6A91"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"exercizes"}
            text={"Приклади із ЗНО "}
            myColor={"#493066"}
            whatTopic={whatTopic}
         />

         <ChooseItem
            text={"Як це робити швидко?"}
            myColor={"#306740"}
            whatTopic={whatTopic}
         />
      </motion.div>
   );
}

export default ChooseTest;
