import { createContext, useContext, useEffect, useState } from "react";
const StateProviderContext = createContext();

export function useStateProvider() {
  return useContext(StateProviderContext);
}
export default function StateManagmentProvider({ children }) {
  const [activeTab, setActiveTab] = useState("accountInfo");
  const [activebtn, setActivebtn] = useState("AutomotiveWindow");
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const handldeOverlayActive = () => {
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("active-nav-overlay");
  };

  const value = {
    activeTab,
    setActiveTab,
    activebtn,
    setActivebtn,
    show,
    setShow,
    sideBar,
    setSideBar,
    copied,
    setCopied,
    handldeOverlayActive,
  };
  return (
    <StateProviderContext.Provider value={value}>
      {children}
    </StateProviderContext.Provider>
  );
}
