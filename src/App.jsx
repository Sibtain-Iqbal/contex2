
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContext } from './Context/theme'

function App() {

  const  [ themeMode , setthemeMode] = useState("light")
const DarkTheme =()=>{
  setthemeMode("light")
}
const lightTheme =()=>{
  setthemeMode("dark")
}

// actual change in theme 
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{Theme,DarkTheme,lightTheme}} >
       
 
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            
        </div>

        <div className="w-full max-w-sm mx-auto">
           
        </div>
    </div>
</div>
  </ThemeProvider>

  )
}

export default App
