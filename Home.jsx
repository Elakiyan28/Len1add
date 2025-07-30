import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Growingplant from "../growingplant/Growingplant";

export default function Home({ devices }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState("Signage");

  const signageCount = devices.filter((d) => d.type === "Signage").length;
  const domainCount = devices.filter((d) => d.type === "Domain").length;

  const filteredDevices = devices.filter((d) => d.type === tab);

  return (
    <div className="app container-fluid p-0">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>
          <ul className="navbar-nav ms-0 ms-md-3 gap-3 mt-2 mt-md-0 flex-row flex-md-row">
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Devices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Group</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="devices-section container">
        <h1>Devices</h1>
        <p>You can add, edit and manage them.</p>
        <div className="tabs d-flex flex-wrap gap-2 mb-3">
          <button
            className={tab === "Signage" ? "active" : ""}
            onClick={() => setTab("Signage")}
          >
            Signage{" "}
            <span
              style={{
                background: "black",
                color: "#fff",
                borderRadius: "16px",
                padding: "0 8px",
                marginLeft: "6px",
              }}
            >
              {signageCount}
            </span>
          </button>
          <button
            className={tab === "Domain" ? "active" : ""}
            onClick={() => setTab("Domain")}
          >
            Domain{" "}
            <span
              style={{
                background: "black",
                color: "#fff",
                borderRadius: "26px",
                padding: "0 8px",
                marginLeft: "6px",
              }}
            >
              {domainCount}
            </span>
          </button>
        </div>

        <div className="controls row mb-3">
          <div className="col-12 d-flex justify-content-end gap-2 flex-wrap">
            <input
              className="ttt form-control"
              style={{ maxWidth: 250 }}
              type="text"
              placeholder="🔍 Search..."
            />
            <button className="fbb btn" style={{ minWidth: 100 }}>
              Filter
            </button>
            <button
              className="b1b btn"
              type="button"
              onClick={() => navigate("/add-device")}
              style={{ minWidth: 100 }}
            >
              <div className="bb">Add</div>
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table
            className="p51 table table-bordered align-middle"
            style={{ fontSize: "1.1rem", borderSpacing: "0 12px" }}
          >
            <thead className="p52 table-light">
              <tr>
                <th className="p2" style={{ padding: "18px 20px" }}>S.No</th>
                <th className="p2" style={{ padding: "18px 20px" }}>Signage ID</th>
                <th className="p2" style={{ padding: "18px 20px" }}>Device Name</th>
                <th className="p2" style={{ padding: "18px 20px" }}>Group Name</th>
                <th className="p2" style={{ padding: "18px 20px" }}>Last Active</th>
                <th className="p2" style={{ padding: "18px 20px" }}>Status</th>
                <th className="p2" style={{ padding: "18px 20px" }}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map((d, i) => (
                <tr key={i}>
                  <td className="p3" style={{ padding: "16px 20px" }}>{i + 1}</td>
                  <td className="p3" style={{ padding: "16px 20px" }}>{d.signageId}</td>
                  <td className="p3" style={{ padding: "16px 20px" }}>{d.name}</td>
                  <td className="p3" style={{ padding: "16px 20px" }}>{d.group}</td>
                  <td className="p3" style={{ padding: "16px 20px" }}>{d.lastActive}</td>
                  <td className="p3" style={{ padding: "16px 20px" }}>{d.status}</td>
                  <td className="p3" style={{ padding: "16px 20px" }}>{d.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
