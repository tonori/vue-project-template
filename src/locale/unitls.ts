export type Lang = "en-US";

export const i18nKeyForLocalStorage = "lang";

export const getLocaleLang = () =>
  localStorage.getItem(i18nKeyForLocalStorage) || "en-US";

export const saveLocaleLangToLocalStorage = (lang: Lang) =>
  localStorage.setItem(i18nKeyForLocalStorage, lang);

export const getSupportLangList: Lang[] = ["en-US"];
