import { createContext, useState } from "react";

const ThemeContext = createContext(); 

const ThemeProvider = ({children}) => {
    const [darkTheme, setDarktTheme] = useState(false)
    
    const handleTheme = () => {
        setDarktTheme=(!darkTheme)
    }
    const data = {
        darkTheme,
        handleTheme
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext}
export default ThemeProvider



