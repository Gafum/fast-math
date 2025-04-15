import { Link } from "react-router-dom";
import { testList } from "../../data/testList";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import {
   AnimateList,
   ScreensAnimation,
} from "../../assets/CustomData/animation";
import { getLanguage } from "../../functions/getLanguage";

function AboutPage() {
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

   const lang = getLanguage();

   return (
      <motion.div className={styles.aboutPage} {...ScreensAnimation}>
         <p>
            {lang.about.welcome + " "}
            <strong>Fast Math!</strong>
         </p>
         {lang.about.list.map((text) => {
            return <p key={text}>{text}</p>;
         })}
         <p>
            <strong>{lang.about.usedLink}:</strong>
         </p>
         <ul className={styles.listOfLinks}>
            {testList.map(({ link, realLink, name }, index) => {
               if (realLink) {
                  return (
                     <ReturnLink
                        key={name}
                        link={realLink}
                        txt={name}
                        index={index}
                     />
                  );
               }
               return (
                  <ReturnLink key={name} link={link} txt={name} index={index} />
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
