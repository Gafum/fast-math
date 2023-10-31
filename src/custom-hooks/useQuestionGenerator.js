import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { testList } from "../data/testList";

function useQuestionGenerator() {
   const [currentQuestion, setCurrentQuestion] = useState({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
   });

   useEffect(() => generateNewQuestion(), [])

   const location = useLocation();
   const whatTopic = location.state ? location.state.whatTopic : null;

   const generateNewQuestion = () => {
      if (whatTopic) {
         setCurrentQuestion(testList.find(({ id }) => id === whatTopic).createQuestions());
      }
   };

   return {
      currentQuestion,
      generateNewQuestion,
   };
}

export default useQuestionGenerator;
