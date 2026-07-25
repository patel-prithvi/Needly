import { useEffect } from "react";
import api from "./services/api";

function App() {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await api.get("hello/");
        console.log(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h1>Needly</h1>
    </div>
  );
}

export default App;