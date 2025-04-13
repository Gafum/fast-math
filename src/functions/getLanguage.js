export function getLanguage() {
   var [lang] = ((navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage) || "en").split("-");
   return lang
}