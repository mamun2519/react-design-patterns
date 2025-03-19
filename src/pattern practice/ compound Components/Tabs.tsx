//create a context for sharing state

import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

// Parent Component manage state
export const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
};

// child component for tab header

export const Tablist = ({ children }) => {
  return <div>{children}</div>;
};

// Child Component for Individual Tab

export const Tab = ({ index, children }) => {
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

// Child Component for Tab Panels

export const TabPanels = ({ children }) => {
  const { activeIndex } = useContext(TabsContext);
  return (
    <div className="tab-panels">
      {React.Children.toArray(children)[activeIndex]}
    </div>
  );
};

// Child Component for Individual Panel
export function TabPanel({ children }) {
  return <div className="tab-panel">{children}</div>;
}

// use example

const App = () => {
  return (
    <Tabs>
      <Tablist>
        <Tab index={0}>Tab 1</Tab>
        <Tab index={1}>Tab 2</Tab>
        <Tab index={2}>Tab 3</Tab>
      </Tablist>

      <TabPanels>
        <TabPanel>Content for Tab 1</TabPanel>
        <TabPanel>Content for Tab 2</TabPanel>
        <TabPanel>Content for Tab 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
