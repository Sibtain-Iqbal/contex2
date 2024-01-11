import {createContext,useContext    } from "react";

export  const ThemeContext = createContext({
    Theme : "LIGHT",
    DarkTheme: ()=> {},
    lightTheme: ()=> {},

})

export const ThemeProvider = ThemeContext.Provider

export default function usetheme(){
    return useContext(ThemeContext)

}