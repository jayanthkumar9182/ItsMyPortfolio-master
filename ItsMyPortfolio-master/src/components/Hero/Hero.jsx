import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jayanth Kumar Kathe</h1>
        <p className={styles.description}>
        Experienced Web Developer with over 3.5+ years of expertise in building high-performance web applications. Skilled in JavaScript,Html,Css libraries such as React, Redux, with a focus on optimizing user experiences and web performance.
        </p>
        <a href="mailto:kathejayanth630@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={"Images/myImage.jpeg"}
        alt=" Hero  me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
