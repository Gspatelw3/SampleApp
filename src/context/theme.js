import React, {createContext, useContext} from 'react';

const themeContext = createContext();

export default function ThemeProvider({children}){
    const value = {
        color : {
            primary: '#4267B2',
            gray: '#898F9C',
            black: '#000',
            white: '#fff',
        }
    }
    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext);