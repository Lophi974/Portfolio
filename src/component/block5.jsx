import AnimatedBackground from "./test";
import "./block5.css";

export function Block5() {
  return (
    <section className="block5" id="block5">
      <a href="#block3" className="block5-arrow-up"><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
      <div className="block5-card">
        <h2 className="block5-title">Contact</h2>
        <p className="block5-sub">Des questions ? Parlons-en.</p>

        <div className="block5-items">
          <div className="block5-item">
            <div className="label">Email</div>
            <a href="mailto:philippe.rochefeuille@epitech.eu">philippe.rochefeuille@epitech.eu</a>
          </div>

          <div className="block5-item">
            <div className="label">GitHub</div>
            <a href="https://github.com/Lophi974" target="_blank" rel="noopener noreferrer">github.com/Lophi974</a>
          </div>

          <div className="block5-item">
            <div className="label">LinkedIn</div>
            <a href="https://www.linkedin.com/in/philippe-rochefeuille-6a29183b7/" target="_blank" rel="noopener noreferrer">linkedin.com/in/philippe-rochefeuille</a>
          </div>
        </div>
      </div>
      <a href="#block1" className="block5-arrow-down"><i className="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
    </section>
  );
}

export default Block5;
