"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "@/app/style/global-style";
import axios from "axios";

function MainComponent() {
  const [jokes, setJokes] = useState({ setup: "", punchline: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      console.log("Fetching Jokes");
      const response = await axios.get(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      console.log(response.data);
      setJokes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <ul
            className="list-group"
            style={{ position: "absolute", top: "20vh" }}
          >
            {" "}
            <li className="" style={{ color: "white", listStyle: "none" }}>
              JOKES : {jokes.setup}
            </li>
            <li className="" style={{ color: "white", listStyle: "none" }}>
              PUNCHLINE : {jokes.punchline}
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <button className="btn btn-warning w-100 rounded" style={{}}>
              <p className="text-center" style={{ margin: 0 }}>
                Click here to Generate a joke
              </p>
            </button>
          </form>
        </div>
      </div>

      <style jsx>
        {`
          button:hover {
            background-color: #0d0d14;
            border-radius: 10px;
          }
          button:hover p {
            color: white;
          }
        `}
      </style>
    </>
  );
}

export default MainComponent;
