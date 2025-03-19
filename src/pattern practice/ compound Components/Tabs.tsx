//create a context for sharing state

import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

// Parent Component manage state
const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
};

// child component for tab header

const Tablist = ({ children }) => {
  return <div>{children}</div>;
};

// Child Component for Individual Tab

const Tab = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;
  return (
    <button
      className={`tab ${isActive ? "active" : ""}`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};
