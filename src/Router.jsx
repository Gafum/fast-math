import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screen/home/Home.jsx";
import BacisTest from "./screen/basic-test/BasicTest.jsx";
import ChooseTest from "./screen/choose-test/ChooseTest.jsx";
import WriteTest from "./screen/write-test/WriteTest.jsx";
import TrueFalseTest from "./screen/true-false/TrueFalseTest.jsx";
import RealExercizes from "./screen/realExercizes/RealExercizes.jsx";
import AboutPage from "./screen/about/About.jsx";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { getLanguage } from "./functions/getLanguage";
import { Error } from "./UI/Error/Error.jsx";

function Router() {
   const location = useLocation();
   useEffect(() => {
      try {
         const lang = getLanguage({ getName: true });
         document.documentElement.lang = lang;
      } catch (error) {
         console.log(error);
      }
   }, []);

   return (
      <AnimatePresence mode="wait" initial={false}>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/choose/:whatTopic" element={<ChooseTest />} />
            <Route path="/basic-test/:whatTopic" element={<BacisTest />} />
            <Route path="/write-test/:whatTopic" element={<WriteTest />} />
            <Route path="/true-false/:whatTopic" element={<TrueFalseTest />} />
            <Route path="/exercizes/:whatTopic" element={<RealExercizes />} />

            <Route path="*" element={<Error />}></Route>
         </Routes>
      </AnimatePresence>
   );
}

export default Router;
