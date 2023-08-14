import React, { createContext, useState } from "react";
import { getRandomId } from "./App";

export const COLORS = {
  blue: "#A7F0F9",
  violet: "#C5C5FC",
  pink: "#FFAEC0",
  yellow: "#FFCC66",
};
// Create the theme context
const AppStore = createContext();

// Create a custom hook to use the theme context easily
export const useAppData = () => {
  const context = React.useContext(AppStore);
  if (!context) {
    throw new Error("useAppData must be used within a ThemeProvider");
  }
  return context;
};

const AppStoreProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [activeBoard, setActiveBoard] = useState(null);

  const [boards, setBoards] = useState([
    {
      id: getRandomId(),
      name: "My board 1",
      color: COLORS.blue,
    },
    {
      id: getRandomId(),
      name: "My board 2",
      color: COLORS.violet,
    },
  ]);

  const AppStoreValues = {
    boards,
    setBoards,
    search,
    setSearch,
    activeBoard,
    setActiveBoard,
  };

  return (
    <AppStore.Provider value={AppStoreValues}>{children}</AppStore.Provider>
  );
};

export default AppStoreProvider;
