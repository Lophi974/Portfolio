import { useEffect, useState } from "react";
import "./block1.css";
import Particles from "./particles";

export function Block1() {

    const [mouted, setMounted] = useState(false)

    useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setMounted(true)
    })

    return () => cancelAnimationFrame(frameId)
    },[])

  return (
    <div className="block1-container" id="block1">
        <div className={`block1-content`} >
                <h1 className={` block1-h1 ${mouted ? "page--enter1" : ""}`}>Philippe ROCHEFEUILLE</h1>

                <nav>
                    <ul className="block1-ul">
                        <a href="#block2" className={`block1-li ${mouted ? "page--enter2" : ""} `}><span className="block1-links" >À propos</span></a>
                        <a href="#block3" className={`block1-li ${mouted ? "page--enter3" : ""}`}><span  className="block1-links" >Expérience</span></a>
                        {/* <a href="#block4"className={`block1-li ${mouted ? "page--enter4" : ""}`}><span  className="block1-links" >Work</span></a> */}
                        <a href="#block5"className={`block1-li ${mouted ? "page--enter5" : ""}`}><span  className="block1-links" >Contact</span></a>
                    </ul>
                </nav>

        </div>

      <Particles
        particleColors={["#948c8c"]}
        particleCount={200}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={200}
        moveParticlesOnHover
        alphaParticles={true}
        disableRotation={false}
        pixelRatio={1}
      />

    </div>
      
  );
}
