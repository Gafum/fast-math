import { Route, Routes } from "react-router-dom";
import Home from "./screen/home/Home.jsx";
import BacisTest from "./screen/basic-test/BasicTest.jsx";
import ChooseTest from "./screen/choose-test/ChooseTest.jsx";
import WriteTest from "./screen/write-test/WriteTest.jsx";
import TrueFalseTest from "./screen/true-false/TrueFalseTest.jsx";
import RealExercizes from "./screen/realExercizes/RealExercizes.jsx";

function Router() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/choose/:whatTopic" element={<ChooseTest />} />
         <Route path="/basic-test/:whatTopic" element={<BacisTest />} />
         <Route path="/write-test/:whatTopic" element={<WriteTest />} />
         <Route path="/true-false/:whatTopic" element={<TrueFalseTest />} />
         <Route path="/exercizes/:whatTopic" element={<RealExercizes />} />

         <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
   );
}

export default Router;
