import getActiveLanguage from '../language/index';
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";


const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
    const [ languageData, setLanguageData ] = useState(getActiveLanguage());
    const language = useSelector(state => state.lang);

    const t = text => languageData[text] || text;

    useEffect(() => {
        if(language) {
            setLanguageData(getActiveLanguage(language))
        }
    }, [ language ]);
    
    return (
        <LanguageContext.Provider value={{ t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useTranslation = () => useContext(LanguageContext);

export default LanguageProvider;
