import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import MobileNavbar from "./components/MobileNavbar";
// Supports weights 100-900
import '@fontsource-variable/montserrat';

const App = () => {
  const [data, setData] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchComponentData = async () => {
      try {
        const response = await fetch("http://localhost:4000/admin/api-services");
        const componentData = await response.json();
        console.log(componentData)
        setData(componentData);
      } catch (error) {
        console.log(error)
      }
    }

    fetchComponentData();
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-gray-900 text-white h-screen overflow-hidden pb-16 md:pb-0">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-scroll w-screen md:w-full relative">
          <MainContent componentData={data.services} />
        </div>
        <MobileNavbar toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default App;
