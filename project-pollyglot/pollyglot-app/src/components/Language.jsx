import { useState } from 'react'
import arFlag from '../assets/arabic.webp'
import auFlag from '../assets/australian.webp'
import zhFlag from '../assets/chinese.webp'
import nlFlag from '../assets/dutch.webp'
import frFlag from '../assets/french.webp'
import deFlag from '../assets/german.webp'
import heFlag from '../assets/hebrew.webp'
import itFlag from '../assets/italian.webp'
import jpFlag from '../assets/japanese.webp'
import ptFlag from '../assets/portuguese.webp'
import esFlag from '../assets/spanish.webp'
import urFlag from '../assets/urdu.webp'

const languageOptions = {
    Arabic: { name: 'Arabic', flag: arFlag },
    Australian: { name: 'Australian', flag: auFlag },
    Chinese: { name: 'Chinese', flag: zhFlag },
    Dutch: { name: 'Dutch', flag: nlFlag },
    French: { name: 'French', flag: frFlag },
    German: { name: 'German', flag: deFlag },
    Hebrew: { name: 'Hebrew', flag: heFlag },
    Italian: { name: 'Italian', flag: itFlag },
    Japanese: { name: 'Japanese', flag: jpFlag },
    Portuguese: { name: 'Portuguese', flag: ptFlag },
    Spanish: { name: 'Spanish', flag: esFlag },
    Urdu: { name: 'Urdu', flag: urFlag }
}

const Language = ({ language, setLanguage }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleLanguageSelect = (lang) => {
        setLanguage(lang)
        setIsDropdownOpen(false)
    }

    return (
        <>
            <div className="language-dropdown-container">
                <h2
                    className="language-dropdown-trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Select Language ▼
                </h2>
                {isDropdownOpen && (
                    <div className="language-dropdown-list">
                        {Object.keys(languageOptions).map((lang) => (
                            <div key={lang} className="language-dropdown-item" onClick={() => handleLanguageSelect(lang)}>
                                {lang}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="language-display">
                <h3>{language}</h3>
                <img src={languageOptions[language].flag} alt={`Flag of ${language}`} />
            </div>
        </>
    )
}

export default Language