import { translationData } from "../data/translationData";

export function getLanguage() {
   var [lang] = ((navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage) || "en").split("-");

   if (translationData[lang]) {
      return translationData[lang]
   }
   return translationData.en
}