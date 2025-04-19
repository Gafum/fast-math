import { storedLanguage } from "../assets/CustomData/Constants";
import { translationData } from "../data/translationData";

export function getLanguage({ getName = false } = {}) {
   let lang = localStorage.getItem(storedLanguage);

   if (!lang || lang.length == 0) {
      lang = ((navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage) || "en").toLocaleLowerCase().split("-")[0];
   }

   if (getName) {
      return lang;
   }

   if (translationData[lang]) {
      return translationData[lang]
   }
   return translationData.en
}