
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const API = import.meta.env.VITE_API_URL;

  async function checkAPI() {
    if (!API) {
      setMessage("Backend API is not configured yet.");
      return;
    }

    try {
      const response = await fetch(`${API}/api/menu`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setMessage(JSON.stringify(data, null, 2));
    } catch (error) {
      setMessage(`API request failed: ${error.message}`);
    }
  }

  return (
    <main className="container">
      <h1>CampusEats</h1>
      <p>Welcome to CampusEats!</p>
      <p>Order your favourite campus meals online.</p>

      <h2>Our Menu</h2>

      <div className="menu">
        <div>🍕 Pizza</div>
        <div>🍔 Burger</div>
        <div>🍝 Pasta</div>
        <div>🥤 Fresh Juice</div>
      </div>

      <button onClick={checkAPI}>
        Load Menu from API
      </button>

      <pre>{message}</pre>

    
    </main>
  );
}

export default App;
