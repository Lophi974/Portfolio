import { useEffect, useState } from "react";
import "./block2.css";
import AnimatedBackground from "./test";

const words = ["Étudiant", "Développeur Frontend", "Développeur Backend"];
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
          <span>Je suis <span style={{ fontWeight: "bold", color: colors[currentIndex] }} className="word-for-span">{words[currentIndex]}</span></span>
        </h2>
        <p className="block2-p">
           Je suis <span>Philippe ROCHEFEUILLE</span>, j'ai <span>24 ans</span>, je suis étudiant à <span>EPITECH</span> et je viens de <span>La Réunion</span>.
           J'étudie le <span>développement FullStack</span> et l'<span>algorithmique</span>.
        </p>
      </div>
      </div>
      <a href="#block3"><i className="fa fa-arrow-circle-down" style={{fontSize:"40px"}}></i></a>
    </div>
    
  );
}
