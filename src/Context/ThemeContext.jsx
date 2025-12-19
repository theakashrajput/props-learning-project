import { createContext, useState } from "react";

// Create Theme Context
export const ThemeContext = createContext();

// Theme provider context
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const value = {
        theme, toggleTheme, isDark: theme === "light"
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
};

export default ThemeProvider;