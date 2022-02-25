import "./App.css";
import io from "socket.io-client";

// eslint-disable-next-line
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <h1>socket programming...</h1>
    </div>
  );
}

export default App;
