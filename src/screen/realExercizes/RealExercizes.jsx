import { useState } from "react";
import { useParams } from "react-router-dom";
import { testList } from "../../data/testList";
import styles from "./RealExercizes.module.css";
import {
   AnimateList,
   SimpleAnimation,
} from "../../assets/CustomData/animation";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { getLanguage } from "../../functions/getLanguage";
import { Error } from "../../UI/Error/Error";

function RealExercizes() {
   const [showAnswers, setShowAnswers] = useState([]);

   const { whatTopic } = useParams();


   if (!testList.find(({ id }) => id === whatTopic)) {
      return <Error />;
   }

   const toggleAnswer = (index) => {
      setShowAnswers((prevShowAnswers) => {
         const updatedShowAnswers = [...prevShowAnswers];
         updatedShowAnswers[index] = !updatedShowAnswers[index];
         return updatedShowAnswers;
      });
   };

   const lang = getLanguage();

   return (
      <LazyMotion features={domAnimation}>
         <m.div
            {...SimpleAnimation}
            style={{ maxWidth: "100vw", width: "100%", overflow: "hidden" }}
         >
            {testList
               .find(({ id }) => id === whatTopic)
               .realExercises.map((item, index) => (
                  <m.div
                     key={index}
                     className={styles.question}
                     initial="hidden"
                     animate="visible"
                     variants={AnimateList}
                     custom={index}
                  >
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
                              {showAnswers[index]
                                 ? lang.realExercises.show
                                 : lang.realExercises.hide}
                           </span>
                        </button>
                     </div>
                     <p
                        className={`${styles.answer} ${
                           showAnswers[index] ? styles.showAnswer : ""
                        }`}
                     >
                        <span>{item.answer}</span>
                     </p>
                  </m.div>
               ))}
         </m.div>
      </LazyMotion>
   );
}

export default RealExercizes;
