import React from "react";
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"Images/emailIcon.png"} alt="Email icon" />
          <a href="mailto:kathejayanth630@gmail.com">kathejayanth630@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"Images/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jayanth-kumar-234185290/">https://www.linkedin.com/in/jayanth-kumar-234185290/</a>
        </li>
        <li className={styles.link}>
          <img src={"Images/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/jayanthkumar9182">https://github.com/jayanthkumar9182</a>
        </li>
      </ul>
    </footer>
  );
};
