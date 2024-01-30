"use client";
import React, { useEffect, useState } from "react";
import GlobalStyle from "@/app/style/global-style";
import style from "./styling.module.css";
import io from "socket.io-client";

function ClientComponent() {
  const [receivedMessage, setReceivedMessage] = useState("");
  const socket = io("http://127.0.0.1:5000/");

  // ClientComponent.js
  useEffect(() => {
    // Emit a message to the server
    socket.emit("message", "Hello Server Flask");

    // Listen for messages from the server
    // ito yung galing sa Flask mismo yung emit nya
    socket.on("response_from_server", (data) => {
      console.log("Received from server:", data);
      setReceivedMessage(data);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <div>
        <p>Received from server: {receivedMessage}</p>
      </div>
    </>
  );
}

export default ClientComponent;
