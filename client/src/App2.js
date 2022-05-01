import "./App.css";
import io from "socket.io-client";
import { useState, useReducer } from "react";
import Chat from "./Chat";

// eslint-disable-next-line
const socket = io.connect("http://localhost:3001");

const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ROOM":
      return {
        ...state,
        room: action.payload,
      };
    case "SHOWCHAT":
      return {
        ...state,
        showChat: true,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    user: "",
    room: "",
    showChat: false,
  });
  //   const [user, setUser] = useState("");
  //   const [room, setRoom] = useState("");
  //   const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (state.user !== "" && state.room !== "") {
      socket.emit("join_room", state.room);
      dispatch({ type: "SHOWCHAT" });
    }
  };
  return (
    <div className="App">
      {!state.showChat ? (
        <div>
          <h1>Join A Chat</h1>
          <input
            type="text"
            placeholder="hello..."
            onChange={(event) => {
              dispatch({ type: "USER", payload: event.target.value });
            }}
            value={state.user}
          />
          <input
            type="text"
            placeholder="room"
            onChange={(event) => {
              dispatch({ type: "ROOM", payload: event.target.value });
            }}
            value={state.room}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <Chat socket={socket} user={state.user} room={state.room} />
      )}
    </div>
  );
}

export default App;
