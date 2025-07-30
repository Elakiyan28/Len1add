import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId.trim()) {
      onLogin(userId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
