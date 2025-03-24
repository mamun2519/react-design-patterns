import { createContext, useContext, useState } from "react";

const ModelContext = createContext();

const Model = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModelContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModelContext.Provider>
  );
};

const ModelTrigger = ({ children }) => {
  const { setIsOpen } = useContext(ModelContext);
  return <button onClick={() => setIsOpen(true)}>{children}</button>;
};

const ModelContent = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(ModelContent);
};
