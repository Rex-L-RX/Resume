import React, {  useEffect, useState } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

function App(){

  const [resumeData, setResumeData] = useState({});
  const getResumeData = () =>{
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        setResumeData(data);
      },
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  useEffect(()=>{   //component did mount
    getResumeData();
  },[]);

  return (
    <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Footer data={resumeData.main} />
      </div>
  )
}

export default App;