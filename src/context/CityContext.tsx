import React, { createContext, useState, ReactNode } from "react";

// Define the context shape
interface CityContextType {
  city: string;
  setCity: (city: string) => void;
}

// Create the context
const CityContext = createContext<CityContextType | undefined>(undefined);

interface CityProviderProps {
  children: ReactNode; // Define the type for children
}

// Create a provider component
export const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;
