// AppContext.tsx
"use client"
import React, { createContext, useContext, ReactNode } from 'react';

interface AppContextType {
    isUSA: boolean;
    setIsUSA: (value: boolean) => void;
}

const defaultContext: AppContextType = {
    isUSA: true,
    setIsUSA: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isUSA, setIsUSA] = React.useState(true);

    return (
        <AppContext.Provider value={{ isUSA, setIsUSA }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);