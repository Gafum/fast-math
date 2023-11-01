import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { testList } from "../data/testList";

function useQuestionGenerator() {
   const [currentQuestion, setCurrentQuestion] = useState({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
   });

   useEffect(() => generateNewQuestion(), [])

   const { whatTopic } = useParams();

   const generateNewQuestion = () => {
      let whatTest = testList.find(({ id }) => id === whatTopic)
      if (whatTest) {
         setCurrentQuestion(whatTest.createQuestions());
      } else {
         setCurrentQuestion({
            question: "Тема не знайдена!!!",
            options: ["1", "2", "3", ":("],
            correctAnswer: "",
         });
      }
   };

   return {
      currentQuestion,
      generateNewQuestion,
   };
}

export default useQuestionGenerator;
