import i18n from "i18next";
import portugues from "./pt-br/portugues.json";
import ingles from "./en/ingles.json";
import { initReactI18next } from "react-i18next";
export default i18n.use(initReactI18next).init({
	fallbackLng: "en",
	lng: "en",
	debug: true,
	interpolation: { escapeValue: false },
	resources: {
		en: ingles,
		ptBR: portugues,
	},
});
