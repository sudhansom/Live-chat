import "./App.css";
import io from "socket.io-client";

// eslint-disable-next-line
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <h1>Join A Chat</h1>
      <input type="text" placeholder="hello..."></input>
      <input type="text" placeholder="room"></input>
      <button>Join Room</button>
    </div>
  );
}

export default App;
