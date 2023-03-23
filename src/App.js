import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtecterRoute from "./components/ProtecterRoute";

function App() {
  const [permission, setPermission] = useState(false);

  const handlePermission = (permission) => {
    setPermission(permission);
  };

  useEffect(() => {
    console.log('se seteo el permiso en ', permission)
    localStorage.setItem("permission", permission);
  }, [permission]);

  useEffect(() => {
    console.log("se busco el permiso")
    const savedPermission = localStorage.getItem("permission");
    console.log(savedPermission, 'saved')
    if (savedPermission !== null) {
      handlePermission(savedPermission);
    }
  }, []);


  return (
    <div>
        <Routes>
        {console.log(permission, 'permission')}
          <Route element={<ProtecterRoute/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Login handlePermission={handlePermission} />} />
        </Routes>
    </div>
  );
}

export default App;
