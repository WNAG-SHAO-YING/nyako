"use client";
import { createContext, useContext, useMemo } from "react";

const CatDataContext = createContext([]);

export function useCatData() {
    return useContext(CatDataContext);
}

export function CatDataProvider({ initialData = [], children }) {
    const value = useMemo(() => initialData, [initialData]);
    return (
        <CatDataContext.Provider value={value}>
            {children}
        </CatDataContext.Provider>
    );
}