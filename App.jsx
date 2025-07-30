import React from "react";
//import "./App.scss";

const App = () => {
  const devices = Array(8).fill({
    signageId: "01234",
    deviceName: "Lenovo AMD Free Sync",
    groupName: "Configuration 1",
    lastActive: "May 23, 2024 at 04:30 PM",
    status: "Active",
    createdAt: "May 20, 2024 at 04:30 PM",
  });

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li className="active">Devices</li>
          <li>Group</li>
        </ul>
      </nav>

      <main className="devices-section">
        <h1>Devices</h1>
        <p>You can add, edit and manage them.</p>

        <div className="tabs">
          <button className="active">Signage 23</button>
          <button>Domain 18</button>
        </div>

        <div className="controls">
          <input type="text" placeholder="Search..." />
          <button>Filter</button>
          <button type="button">Add</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Signage ID</th>
              <th>Device Name</th>
              <th>Group Name</th>
              <th>Last Active</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{device.signageId}</td>
                <td>{device.deviceName}</td>
                <td>{device.groupName}</td>
                <td>{device.lastActive}</td>
                <td>{device.status}</td>
                <td>{device.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default App;
