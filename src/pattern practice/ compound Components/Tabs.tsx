//create a context for sharing state

import { createContext, useState } from "react";

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
