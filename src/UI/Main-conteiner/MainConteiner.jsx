import { useEffect } from "react";
import styles from "./MainConteiner.module.css";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

function MainConteiner({ children }) {
   let location = useLocation();
   let conteiner = useRef();

   useEffect(() => {
      setTimeout(() => {
         conteiner.current.scrollTo({ top: 0 });
      }, 200);
   }, [location]);

   return (
      <div className={styles.mainConteiner} ref={conteiner}>
         {children}
         <div className={styles.invisibleBox}></div>
      </div>
   );
}

export default MainConteiner;
