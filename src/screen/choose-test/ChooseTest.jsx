import { useNavigate, useParams } from "react-router-dom";
import ChooseItem from "./chooseItem/ChooseItem";
import styles from "./ChooseTest.module.css";
import { testList } from "../../data/testList";
import { motion } from "framer-motion";
import { ScreensAnimation } from "../../assets/CustomData/animation";
import { getLanguage } from "../../functions/getLanguage";
import { translationData } from "../../data/translationData";

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

   const lang = getLanguage();

   return (
      <motion.div className={styles.cardList} {...ScreensAnimation}>
         <ChooseItem
            where={"basic-test"}
            text={translationData[lang].choseTest["basic-test"]}
            myColor={"#912C2C"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"write-test"}
            text={translationData[lang].choseTest["write-test"]}
            myColor={"#2C9182"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"true-false"}
            text={translationData[lang].choseTest["true-false"]}
            myColor={"#2C6A91"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"exercizes"}
            text={translationData[lang].choseTest["exercizes"]}
            myColor={"#493066"}
            whatTopic={whatTopic}
         />

         <ChooseItem
            text={translationData[lang].choseTest["video"]}
            myColor={"#306740"}
            whatTopic={whatTopic}
         />
      </motion.div>
   );
}

export default ChooseTest;
