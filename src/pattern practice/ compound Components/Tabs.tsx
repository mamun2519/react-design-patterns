//create a context for sharing state

import { createContext, useState } from "react";

const TabsContext = createContext(0);

// Parent Component manage state
const Tabs = ({children})=>{
      const [activeIndex, setActiveIndex] = useState(0)
      return ()
}
