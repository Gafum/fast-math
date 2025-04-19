import React, { useState, useRef, useEffect } from "react";
import { translationData } from "../../../data/translationData";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector({ appLanguage, onChange }) {
   const [isOpen, setIsOpen] = useState(false);
   const containerRef = useRef(null);

   useEffect(() => {
      const handleOutsideClick = (e) => {
         if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsOpen(false);
         }
      };
      document.addEventListener("mousedown", handleOutsideClick);
      return () =>
         document.removeEventListener("mousedown", handleOutsideClick);
   }, []);

   return (
      <div className={styles.languageSelector} ref={containerRef}>
         <div className={styles.label}>Select Language:</div>
         <div className={styles.selectorBox} onClick={() => setIsOpen(!isOpen)}>
            {translationData[appLanguage].translationName}
            <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
         </div>
         {isOpen && (
            <ul className={styles.dropdown}>
               {Object.entries(translationData).map(
                  ([lang, { translationName }]) => (
                     <li
                        key={lang}
                        className={`${styles.dropdownItem} ${
                           lang === appLanguage ? styles.active : ""
                        }`}
                        onClick={() => {
                           onChange(lang);
                           setIsOpen(false);
                        }}
                     >
                        {translationName}
                     </li>
                  )
               )}
            </ul>
         )}
      </div>
   );
}
