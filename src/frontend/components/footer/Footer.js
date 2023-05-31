import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faAlternateGitHub } from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>Connect With Me @Jugesh Raghav</p>
        <div className="footer-icons">
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a>
            <FaGithub />
          </a>
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* <FontAwesomeIcon icon={faGitHub} /> */}
          {/* <FontAwesomeIcon icon={faAlternateGitHub} /> */}
          {/* <FontAwesomeIcon icon={faLinkedInIn} /> */}
        </div>
      </div>
    </>
  );
};
