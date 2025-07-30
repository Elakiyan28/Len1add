import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import AddDevice from "../adddevice/AddDevice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mainapp() {
  const [devices, setDevices] = useState([
    {
      signageId: "01234",
      name: "Lenovo AMD Free Sync",
      group: "Configuration 1",
      lastActive: "20/05/2024, 04:30 pm",
      status: "Active",
      created: "20/05/2024, 04:30 pm",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home devices={devices} />} />
        <Route
          path="/add-device"
          element={<AddDevice setDevices={setDevices} devices={devices} />}
        />
      </Routes>
    </Router>
  );
}
