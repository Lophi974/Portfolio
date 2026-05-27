import "./block4.css";
import AnimatedBackground from "./test";

export function Block4() {
  return (
    <div className="block4-container" id="block4">
      <AnimatedBackground />
      <a href="#block3"><i className="fa fa-arrow-circle-up block4-arrow-up" style={{fontSize:"40px"}}></i></a>
      <div className="block4-content">
          <div className="time-line-content-container">
            <div className="time-line-content ">test</div>
            <div className="block4-point"></div>
          </div>
          <div className="time-line-content-container">
            <div className="block4-point"></div>
            <div className="time-line-content ">test</div>
          </div>
      </div>
      <a href="#block5"><i className="fa fa-arrow-circle-down block4-arrow-down" style={{fontSize:"40px"}}></i></a>
    </div>
  );
}
