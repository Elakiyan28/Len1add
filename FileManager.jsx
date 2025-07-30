import React from "react";

export default function FileManager({ userId }) {
  const handleUpload = () => alert("Uploading file...");
  const handleDelete = () => alert("Deleting file...");
  const handleLogout = () => window.location.reload();

  return (
    <div>
      <h3>Welcome, {userId}!</h3>
      <button onClick={handleUpload}>Upload File</button>
      <button onClick={handleDelete}>Delete File</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
