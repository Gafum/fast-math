import { useNavigate, useParams } from "react-router-dom";
import ChooseItem from "./chooseItem/ChooseItem";
import styles from "./ChooseTest.module.css";
import { testList } from "../../data/testList";
import { motion } from "framer-motion";
import { ScreensAnimation } from "../../assets/CustomData/animation";
import { getLanguage } from "../../functions/getLanguage";
import { Error } from "../../UI/Error/Error";

function ChooseTest() {
   const { whatTopic } = useParams();


   if (!testList.find(({ id }) => id === whatTopic)) {
      return <Error />;
   }

   const lang = getLanguage();

   return (
      <motion.div className={styles.cardList} {...ScreensAnimation}>
         <ChooseItem
            where={"basic-test"}
            text={lang.choseTest["basic-test"]}
            myColor={"#912C2C"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"write-test"}
            text={lang.choseTest["write-test"]}
            myColor={"#2C9182"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"true-false"}
            text={lang.choseTest["true-false"]}
            myColor={"#2C6A91"}
            whatTopic={whatTopic}
         />
         <ChooseItem
            where={"exercizes"}
            text={lang.choseTest["exercizes"]}
            myColor={"#493066"}
            whatTopic={whatTopic}
         />

         <ChooseItem
            text={lang.choseTest["video"]}
            myColor={"#306740"}
            whatTopic={whatTopic}
         />
      </motion.div>
   );
}

export default ChooseTest;
