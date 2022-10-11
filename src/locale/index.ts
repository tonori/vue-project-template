import HomeEn from "@/locale/Home/en";

export default {
  en: {
    home: HomeEn,
  },
};

export const getLocaleLang = () => localStorage.getItem("lang") || "en";

export const getSupportLangList = () => ["en"];
