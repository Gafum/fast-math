import { translationData } from "../data/translationData";

export function getLanguage({ getName = false } = {}) {
   var [lang] = ((navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage) || "en").toLocaleLowerCase().split("-");

   if (getName) {
      return lang;
   }

   if (translationData[lang]) {
      return translationData[lang]
   }
   return translationData.en
}