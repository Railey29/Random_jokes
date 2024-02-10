"use client";
import React, { useEffect, useState } from "react";
import GlobalStyle from "@/app/style/global-style";
import style from "./styling.module.css";
import io from "socket.io-client";

function ClientComponent() {
  const [receivedMessage, setReceivedMessage] = useState(""); // kahit iremove mo to

  const message = "Railey";
  const socket = io("http://127.0.0.1:5000/"); // Connection mo to sa Flask yung link ng flask

  useEffect(() => {
    // Emit a message to the server dapat ito yung maget nung server or ng Flask
    socket.emit("message", "Hello", message, "rairai", receivedMessage);
    // ito yung Parang Endpoint nila  && Din ito yung Message na dala nya

    // Listen for messages from the server
    // ito yung galing sa Flask mismo yung emit nya
    socket.on("response_from_server", (data) => {
      console.log("Received from server:", data);
      setReceivedMessage(data);
    }); // Kahit i Remove mo to kasi pinapapunta mo lang to from backend to frontend eh
  }, []);

  return (
    <>
      <GlobalStyle />
      <div>
        <p>Received from server: {receivedMessage}</p>{" "}
        {/* Kahit i remove mo to*/}
      </div>
    </>
  );
}

export default ClientComponent;
