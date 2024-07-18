import React from "react";
import Button from "./Button/Button";
import classes from "./banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.backgroundImage}>
        <img
          src="https://images.unsplash.com/photo-1720191457364-43a1ade67c57?q=80&w=1449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Main banner image."
        />
      </div>

      <div className={classes.description}>
        <h1>Architecture and design</h1>
        <h1>by "Norman Foster"</h1>
        <p>Leave your design and architecture to our team</p>
        <Button text="Leave a request" to="" />
      </div>
      <div className={classes.leftPicture}>
        <img
          src="https://images.unsplash.com/photo-1719582116363-a55de8b46222?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner's left image."
        />
      </div>
      <div className={classes.text}>
        <span>" The source of truth for all of your</span>
        <br />
        <span>product decisions"</span>
      </div>
      <div className={classes.rightPicture}>
        <img
          src="https://images.unsplash.com/photo-1718890831209-809235a482d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner's Right image."
        />
      </div>
    </div>
  );
};

export default Banner;
