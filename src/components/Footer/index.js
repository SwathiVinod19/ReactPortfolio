import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made with ♥ by Swathi Vinod</h2>
      <p>
        <ul>
        <a href="https://www.linkedin.com/in/swathi-vinod-2b050290/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://github.com/SwathiVinod19">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
