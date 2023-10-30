import { useLocation } from "react-router-dom";
import ChooseItem from "./chooseItem/ChooseItem";
import styles from "./ChooseTest.module.css";

function ChooseTest() {
   const {
      state: { whatTopic },
   } = useLocation();
   return (
      <div className={styles.cardList}>
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
      </div>
   );
}

export default ChooseTest;
