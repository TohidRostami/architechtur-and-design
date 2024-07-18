import React from 'react';
import classes from './LastProjects.module.css'

const LastProjects = () => {
    return (
        <div className={classes.LastProjects}>
                <h2>Last Projects</h2>

            <div className={classes.gridShowcase}>

                <div className={classes.project}>
                    <div className={classes.prorjectImage}>
                        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project image" />
                    </div>
                    <div className={classes.projectDisc}>
                        <h3>Project Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className={classes.project}>
                    <div className={classes.prorjectImage}>
                        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project image" />
                    </div>
                    <div className={classes.projectDisc}>
                        <h3>Project Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className={classes.project}>
                    <div className={classes.prorjectImage}>
                        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project image" />
                    </div>
                    <div className={classes.projectDisc}>
                        <h3>Project Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastProjects;