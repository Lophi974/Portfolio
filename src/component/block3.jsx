import { useEffect, useState } from "react"
import "./block3.css"
import data from "../../data/data.json"
import AnimatedBackground from "./test";


export function Block3 () {
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedProject(null)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    const openProject = (project) => {
        setSelectedProject(project)
    }

    const closeProject = () => {
        setSelectedProject(null)
    }


    const card = data.projects.map(Element => 
        <button
            type="button"
            className="block3-card-container"
            style={{backgroundImage:`url(${Element.img !=="" ? Element.img : ""})`}}
            onClick={() => openProject(Element)}
        >
            <h3 className="block3-card-tiltle vertical-text">{Element.title}</h3>
            <div className="block3-card-content">
                <h3>{Element.title}</h3>
                <p>
                    {Element.shortDescription}
                </p>
            </div>
        </button>
    )

    const project = selectedProject


    return(
        <>
            <div className="block3-container" id="block3">
                <AnimatedBackground />
                <a href="#block2"><i className="fa fa-arrow-circle-up block3-arrow-up" style={{fontSize:"40px", color:"wheat"}}></i></a>
                <div className="carrousel-container">
                    {card}
                </div>
                <a href="#block5"><i className="fa fa-arrow-circle-down block3-arrow-down" style={{fontSize:"40px", color:"wheat"}}></i></a>
            </div>
            {project ? (
                <div className="project-modal-overlay" onClick={closeProject}>
                    <div className="project-modal" onClick={(event) => event.stopPropagation()}>
                        <button type="button" className="project-modal-close" onClick={closeProject} aria-label="Fermer la modale">
                            ×
                        </button>
                        <div className="project-modal-hero">
                            <div className="project-modal-visual" style={{backgroundImage: `url(${project.img})`}}>
                                <span className="project-modal-badge">Case study</span>
                                <div className="project-modal-visual-glow"></div>
                            </div>
                            <div className="project-modal-hero-content">
                                <p className="project-modal-eyebrow">Projet détaillé</p>
                                <h2>{project.title}</h2>
                                <p className="project-modal-subtitle">{project.subtitle}</p>
                                <p className="project-modal-intro">{project.shortDescription}</p>
                                <div className="project-modal-meta-grid">
                                    <article>
                                        <span>Équipe</span>
                                        <strong>{project.teamSize} personnes</strong>
                                    </article>
                                    <article>
                                        <span>Stack</span>
                                        <strong>{project.stack.length} technologies</strong>
                                    </article>
                                    <article>
                                        <span>Design</span>
                                        <strong>{project.design.system}</strong>
                                    </article>
                                    <article>
                                        <span>Déploiement</span>
                                        <strong>{project.infrastructureAndDeployment.tools.join(" + ")}</strong>
                                    </article>
                                </div>
                                {project.url ? (
                                    <div className="project-modal-cta-wrap">
                                        <a
                                            className="project-modal-cta"
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.linkTxt || "Voir le projet"}
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className="project-modal-grid">
                            <section className="project-modal-section project-modal-section--wide">
                                <h3>Présentation</h3>
                                <p>{project.longDescription}</p>
                            </section>

                            <section className="project-modal-section">
                                <h3>Stack</h3>
                                <div className="project-modal-tags">
                                    {project.stack.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="project-modal-section">
                                <h3>Architecture</h3>
                                <div className="project-modal-cards">
                                    {project.architecture.map((layer) => (
                                        <article key={layer.layer}>
                                            <h4>{layer.layer}</h4>
                                            <p>{layer.details}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section className="project-modal-section">
                                <h3>Fonctionnalités</h3>
                                <div className="project-modal-cards">
                                    {project.features.map((feature) => (
                                        <article key={feature.name}>
                                            <h4>{feature.name}</h4>
                                            <p>{feature.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section className="project-modal-section">
                                <h3>Sécurité</h3>
                                <ul className="project-modal-list">
                                    {project.security.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="project-modal-section">
                                <h3>Déploiement</h3>
                                <p>{project.infrastructureAndDeployment.environment}</p>
                                <div className="project-modal-tags">
                                    {project.infrastructureAndDeployment.tools.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="project-modal-section">
                                <h3>Gestion de projet</h3>
                                <p>{project.management.workflow}</p>
                                <div className="project-modal-tags">
                                    {project.management.tools.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="project-modal-section project-modal-section--wide">
                                <h3>Design</h3>
                                <p>{project.design.details}</p>
                            </section>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )

}