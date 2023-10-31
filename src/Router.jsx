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
         <Route path="/fast-math/" element={<Home />} />
         <Route path="/fast-math/choose" element={<ChooseTest />} />
         <Route path="/fast-math/basic-test" element={<BacisTest />} />
         <Route path="/fast-math/write-test" element={<WriteTest />} />
         <Route path="/fast-math/true-false" element={<TrueFalseTest />} />
         <Route path="/fast-math/exercizes" element={<RealExercizes />} />

         <Route path="*" element={<h1>Not Fount</h1>}></Route>
      </Routes>
   );
}

export default Router;
