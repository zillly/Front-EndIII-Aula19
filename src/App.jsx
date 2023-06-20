import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage(() => {
     if ( language.id === "ES") {
       setLanguage(languages.portuguese)
      }
     if(language.id === "PTBR"){
        setLanguage(languages.english)
        
     }
     if(language.id === "EN"){
      setLanguage(languages.spanish)
        
     }
     
      
    })
  }

  return (
    <div className="App">
      <>{/*  DICA: Adicione o provider LanguageContext */}
      <LanguageContext.Provider value={{ language, handleChangeLA }}>

          <Navbar />
          <Body />

        </LanguageContext.Provider>
      </>
    </div>
  )
}

export default App