import { createContext, ReactNode } from "react";

// Definiera typen för temat
export interface Theme {
    color: string;
}

// Skapa en kontext med en standardvärde
export const ThemeContext = createContext<Theme | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <ThemeContext.Provider value={{ color: 'blue' }}>
            {children}
        </ThemeContext.Provider>
    );
}
