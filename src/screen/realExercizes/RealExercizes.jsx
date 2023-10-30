import { useState } from "react";
import { useLocation } from "react-router-dom";
import { testList } from "../../data/testList";
import styles from "./RealExercizes.module.css";

function RealExercizes() {
   const [showAnswers, setShowAnswers] = useState([]);

   const {
      state: { whatTopic },
   } = useLocation();

   const toggleAnswer = (index) => {
      setShowAnswers((prevShowAnswers) => {
         const updatedShowAnswers = [...prevShowAnswers];
         updatedShowAnswers[index] = !updatedShowAnswers[index];
         return updatedShowAnswers;
      });
   };

   return (
      <>
         {testList
            .find(({ id }) => id === whatTopic)
            .realExercises.map((item, index) => (
               <div key={index} className={styles.question}>
                  <div className={styles.titleContainer}>
                     <h3
                        style={{
                           fontSize:
                              item.question.length > 30 ? "20px" : "auto",
                        }}
                     >
                        {item.question}
                     </h3>
                     <button onClick={() => toggleAnswer(index)}>
                        <span>
                           {showAnswers[index] ? "Сховати" : "Показати"}
                        </span>
                        <span>відповідь</span>
                     </button>
                  </div>
                  <p
                     className={`${styles.answer} ${
                        showAnswers[index] ? styles.showAnswer : ""
                     }`}
                  >
                     {item.answer}
                  </p>
               </div>
            ))}
      </>
   );
}

export default RealExercizes;
