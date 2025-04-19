import { Link } from "react-router-dom";
import { testList, testListGenerator } from "../../data/testList";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import {
   AnimateList,
   ScreensAnimation,
} from "../../assets/CustomData/animation";
import { getLanguage } from "../../functions/getLanguage";
import { useState } from "react";
import { storedLanguage } from "../../assets/CustomData/Constants";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
function ReturnLink({ link, txt, index }) {
   return (
      <motion.li
         variants={AnimateList}
         animate="visible"
         initial="hidden"
         custom={index}
      >
         <a href={link} target="_blank">
            {txt} : {link}
         </a>
      </motion.li>
   );
}

function AboutPage() {
   const [appLanguage, setAppLanguage] = useState(
      getLanguage({ getName: true })
   );

   const handleChange = (newLang) => {
      localStorage.setItem(storedLanguage, newLang);
      testListGenerator();
      setAppLanguage(newLang);
   };

   const lang = getLanguage();

   return (
      <motion.div className={styles.aboutPage} {...ScreensAnimation}>
         <LanguageSelector appLanguage={appLanguage} onChange={handleChange} />
         <p>
            {lang.about.welcome + " "}
            <strong>Fast Math!</strong>
         </p>

         {lang.about.list.map((text) => {
            return <p key={text}>{text}</p>;
         })}

         <p>
            <strong>{lang.about.developerData}:</strong>
         </p>
         <ul className={styles.developerLinks}>
            <li>
               <a href="https://github.com/Gafum">GitHub</a>
            </li>
            <li>
               <a href="https://www.youtube.com/@gafum">YouTube</a>
            </li>
            <li>
               <a href="https://play.google.com/store/apps/dev?id=5298640550031789087&gl=DE">
                  Google Play
               </a>
            </li>
         </ul>
         <p>
            <strong>{lang.about.usedLink}:</strong>
         </p>
         <ul className={styles.listOfLinks}>
            {testList.map(({ link, realLink, id }, index) => {
               return (
                  <ReturnLink
                     key={id}
                     link={realLink ? realLink : link}
                     txt={lang.testList[index].name}
                     index={index}
                  />
               );
            })}
         </ul>
         <Link to="/">
            <img
               src="/fast-math/favicon.svg"
               alt="icon"
               width="50px"
               height="50px"
            />
         </Link>
      </motion.div>
   );
}

export default AboutPage;
