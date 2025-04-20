import { storedLanguage } from "../assets/CustomData/Constants";
import { translationData } from "../data/translationData";

export function getLanguage({ getName = false } = {}) {
   let lang;

   try {
      lang = localStorage.getItem(storedLanguage) || "";
      if (!lang || lang.length == 0) {
         lang = ((navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage) || "en").toLowerCase().split("-")[0];
      }
   } catch (error) {
      console.warn("Error getting language:", error);
      lang = "en";
   }

   const validLang = translationData[lang] ? lang : "en";

   return getName ? validLang : translationData[validLang];
}