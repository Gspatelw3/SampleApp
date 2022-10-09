import React, {createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';
import { useWindowDimensions } from 'react-native';

const themeContext = createContext();

export default function ThemeProvider({children}){
    const { height, width } = useWindowDimensions();
    const isDarkMode = useColorScheme() === 'dark';
    const value = {
        color : {
            primary: '#4267B2',
            gray: '#898F9C',
            black: '#000',
            dark: '#242526',
            white: '#fff',
        },
        space : {
            x: 16,
            y: 16,
        },
        size: {
            width: width,
            height: height,
        },
        themeType: {
            dark: isDarkMode,
            light: !isDarkMode,
        }
    }
    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext);