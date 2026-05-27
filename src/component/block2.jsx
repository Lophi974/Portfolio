import { useEffect, useState } from "react";
import "./block2.css";
import AnimatedBackground from "./test";

const words = ["Student", "Frontend Developer", "Backend Developer"];
const colors = ["#1F3A5F", "#501363", "#66181f"];

export function Block2() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


  return (
    <div className="block2-container" id="block2" style={{flexDirection:"column"}}>
      <a href="#block1"><i className="fa fa-arrow-circle-up" style={{fontSize:"40px"}}></i></a>
      <AnimatedBackground />
      <div style={{zIndex:"1", backgroundColor:"#995527", width:"80%", boxShadow:"0px 0px 35px 5px #d8b485", borderRadius:"33px", display:"flex", justifyContent:"center", alignItems:"center", height:"30rem"}}>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h2 className="block2-h2">
          <span >I'm a <span style={{ fontWeight: "bold", color: colors[currentIndex] }} className="word-for-span">{words[currentIndex]}</span> </span>
        </h2>
        <p className="block2-p">
           I'm <span>Philippe ROCHEFEUILLE </span> i'm <span>24 years old</span>, i'm a Student from <span>EPITECH</span> and I'm from <span>REUNION Island</span>.
           I'm studing <span>FullStack Developement</span> and <span>Logical Algorisme</span>
        </p>
      </div>
      </div>
      <a href="#block3"><i className="fa fa-arrow-circle-down" style={{fontSize:"40px"}}></i></a>
    </div>
    
  );
}
