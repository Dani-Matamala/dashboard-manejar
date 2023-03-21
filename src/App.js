import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtecterRoute from "./components/ProtecterRoute";

function App() {
  const [permission, setPermission] = useState(false);

  const handlePermission = (permission) => {
    setPermission(permission);
  };

  return (
    <div>
        <Routes>
          <Route path="/" element={<Login handlePermission={handlePermission} />} />
          <Route element={<ProtecterRoute permission={permission}/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
