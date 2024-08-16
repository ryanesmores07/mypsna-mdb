export function getUserLanguage() {
  if (typeof window !== 'undefined') {
    const userLang = window.navigator.language;
    const langCode = userLang ? userLang.split('_')[0] : "en";

    return langCode;
  }
}
