import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

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
      <div className="flex min-h-screen bg-gray-900 text-white">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Main Content */}
        <div className="flex-1">
          <MainContent componentData={data.services} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
