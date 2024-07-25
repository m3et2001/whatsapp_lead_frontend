import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import { ProtectRoute } from "./utils/ProtectRoutes";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import { useStateValue } from "./StateProvider";

import DisableBackButton from "./utils/DisableBackButton";
import useDisableScroll from "./utils/useDisableScroll ";
import Chat from "./pages/Chat/Chat";

// import Task from "./pages/Task/Task";
// import AddUpdateTaskTemp from "./pages/TaskTemp/AddUpadteTaskTemp/AddUpadteTaskTemp";

function App() {
  const [{ userLoggedIn,isLoading },dispatch] = useStateValue();
  const [isToggled, setIsToggle] = useState(true);
  useDisableScroll()
  // DisableBackButton()

  // ************************************ toggle fun start ************************************
  const toggle = () => {
    setIsToggle(!isToggled);
  };
  // ************************************ toggle fun end ************************************

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsToggle(true);
    }
    
  }, []);
 
  
  return (
    <div
      id="main-wrapper"
      className={`${isToggled ? " main-wrapper toggled" : "main-wrapper"}`}
    >
      <BrowserRouter>
        {isLoading && <LoadingSpinner />}
        <Toaster />
          <DisableBackButton />
        <Routes>
        
          <Route
            path="/"
            element={
              <ProtectRoute>
                <Header toggle={toggle} />
                <Sidebar toggle={toggle} />
                <Outlet />

                {/* <Home /> */}
              </ProtectRoute>
            }
          >
            <Route index element={<Chat />} />
            <Route path="chat" element={<Chat />} />
            {/* <Route index element={<Home />} /> */}
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
