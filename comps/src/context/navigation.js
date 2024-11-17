import { useState, createContext, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    }
  });

  const navigate = (path) => {
    window.history.pushState({}, "", path);

    setCurrentPath(path);
  }

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
}

export {NavigationProvider};

export default NavigationContext;
