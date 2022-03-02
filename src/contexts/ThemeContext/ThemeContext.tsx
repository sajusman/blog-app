import { useState, createContext } from "react";
import React from 'react';
import {ThemeType,ThemeContextState,IProps} from "./types";

export const ThemeContext = createContext<null | ThemeContextState>(null);

function ThemeProvider({children}:IProps) {

    const [theme,setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;