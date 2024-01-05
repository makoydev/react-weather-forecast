import { useContext } from "react";
import CityContext from "./CityContext";

// Hook to use the city context
export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};
