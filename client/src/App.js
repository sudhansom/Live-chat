import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

// eslint-disable-next-line
const socket = io.connect("http://localhost:3001");

function App() {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = () => {};

  return (
    <div className="App">
      <h1>Join A Chat</h1>
      <input
        type="text"
        placeholder="hello..."
        onChange={(event) => {
          setUser(event.target.value);
        }}
        value={user}
      />
      <input
        type="text"
        placeholder="room"
        onChange={(event) => {
          setUser(event.target.value);
        }}
        value={room}
      />
      <button>Join Room</button>
    </div>
  );
}

export default App;
