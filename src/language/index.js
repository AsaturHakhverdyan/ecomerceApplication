import am from "./am.json";
import en from "./en.json";
import ru from "./ru.json"

const languages = {
    am,
    en,
    ru
}

const getActiveLanguage = lang => languages[lang] || languages['en'];


export default getActiveLanguage;
