import Project from "@/models/Project";
import React from "react";
import classes from "./ProjectsAndSelling.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare
  } from "@fortawesome/free-solid-svg-icons";
const ProjectsAndSelling: React.FC<{}> = () => {
  // projects: Project[] props
  return (
    <div className={classes.showProjects}>
      <div className={classes.showcase}>
            <div className={classes.buttons}>
            <button>Projects</button>
            <button>Selling</button>
            </div>

            <div className={classes.projectsShowcase}>
                <div className={classes.project}>
                    <div className={classes.projectImage}>
                    <img
                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project image"
                    />
                    </div>
                    <div className={classes.projectDisc}>
                        <h3>Project Name</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className={classes.projectLink}>
                    <a href="">See more<FontAwesomeIcon icon={faArrowUpRightFromSquare} className={classes.icon} /></a> 
                    
                    </div>
                </div>

                <div className={classes.project}>
                    <div className={classes.projectImage}>
                    <img
                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project image"
                    />
                    </div>
                    <div className={classes.projectDisc}>
                    <h3>Project Name</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                    </div>
                    <div className={classes.projectLink}>
                    <a href="">See more...</a>
                    </div>
                </div>

                <div className={classes.project}>
                    <div className={classes.projectImage}>
                    <img
                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project image"
                    />
                    </div>
                    <div className={classes.projectDisc}>
                    <h3>Project Name</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                    </div>
                    <div className={classes.projectLink}>
                    <a href="">See more...</a>
                    </div>
                </div>

                <div className={classes.project}>
                    <div className={classes.projectImage}>
                    <img
                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project image"
                    />
                    </div>
                    <div className={classes.projectDisc}>
                    <h3>Project Name</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                    </div>
                    <div className={classes.projectLink}>
                    <a href="">See more...</a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={classes.icon} />
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default ProjectsAndSelling;
