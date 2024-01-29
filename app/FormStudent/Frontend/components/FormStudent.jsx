"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./styling.module.css";
import GlobalStyle from "@/app/style/global-style";
import axios from "axios";

function FormStudent() {
  //
  // function/method for handleSubmit in Form
  const handleSubmit = (e) => {
    e.preventDefault(); // para di ulit ulit ang pag rerefresh pag nag susubmit

    /* THIS IS FOR CHECKING ARRAYLIST 

    // Storange of Collected data
    const [studentRecord, setStudentRecord] = useState([]); // storange or dataset

    //Object Types yung value is yung huling input or yung gineget ng onChange sa useState
    const result = {
      name: userInput,
      address: userAddress,
      course: userCourse,
    };

    // if name not empty the setStudentRecord is arrayList collection of Data ipapasok don lahat ng objects
    if (result.name !== "" && result.address !== "" && result.course !== "") {
      setStudentRecord(() => [...studentRecord, result]); // add to the arrayList
    }
    */
    fetchFromBackEnd();
    // after adding all the input boxes is refreshed or clear
    setUserInput("");
    setUserAddress("");
    setCourse("BSIT");
    setData({}); // reset the data getting of user fetching the respones
  }; // under or ito yung magyayari sa lahat ng HandleSubmit or lahat ng mangyayari pag nag submit ka
  // End of Handle Submit

  // Data Getting on onChnage
  const [userInput, setUserInput] = useState(""); // username
  const [userAddress, setUserAddress] = useState(""); // address
  const [userCourse, setCourse] = useState("BSIT"); // course
  //  si data yung var.. na pinapasahan ni setData na kukumukuha sa respones.data sa backend Connection
  const [data, setData] = useState({}); // collection of backend

  //styling focus
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus(); // once lang gagawin
  }, []);

  // Method for backend Connection
  const fetchFromBackEnd = async () => {
    try {
      console.log("Sending POST request..."); // console For Error
      // API or EndPoint
      const response = await axios.post(
        "http://127.0.0.1:5000/studentForm", // or use the correct URL for your Flask server
        {
          name: userInput,
          address: userAddress,
          course: userCourse,
        }
      );

      const data = await response.json();

      setData(response.data); // ifefetch nung frontEnd yung Data After ma process ng Flask And ito yung kukuha ng mga data ni user
    } catch (error) {
      console.error("Have an Error!", error);
    }
  };

  return (
    <>
      {/* This is for body of the Component or Buong Webpage */}
      <GlobalStyle />
      <div className={style.container}>
        <h3 className={style.title}>Student Form</h3>
        <form onSubmit={handleSubmit} className={style.get_data}>
          <label className={style.name}>Name</label>
          <br />
          <input
            type="name"
            placeholder="Please Enter Your Name"
            className={style.UserName}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)} // igeget nya yung last na input mo then iadd nya don sa UserInput
            ref={inputRef}
            required
          />
          <br />
          <label className={style.address}>Address</label>
          <br />
          <input
            type="text"
            placeholder="Please Enter Your Address"
            className={style.UserAddress}
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            required
          />
          <br />
          <label className={style.course}>Course </label>
          <br />
          <select
            onChange={(e) => setCourse(e.target.value)}
            className={style.ChoicesCourse}
            value={userCourse}
          >
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSCPE">BSCPE</option>
            <option value="BSTM">BSTM</option>
            <option value="BSA">BSA</option>
            <option value="BSBA">BSBA</option>
            <option value="MMA">MMA</option>
            <option value="BACOOM">BACOOM</option>
            <option value="HM">HM</option>
          </select>
          <br />
          <button type="submit" className={style.submitButton}>
            Submit Button
          </button>
        </form>
        {/*
        <ul className={style.listed}>
          {studentRecord.map((record, index) => (
            <li key={index}>
              {record.name},{record.address},{record.course}
            </li>
          ))}
        </ul>
         */}
        {/*
        <p>Name: {data.name}</p>
        <p>Address: {data.address}</p>
        <p>Course: {data.course}</p>
        */}
      </div>
    </>
  );
}

export default FormStudent;
