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
            <FontAwesomeIcon icon={faInstagram} shake />
          </a>
          <a>
            <FaGithub shake />
          </a>
          <a>
            <FaLinkedin shake />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitter} shake />
          </a>
          {/* <FontAwesomeIcon icon={faGitHub} /> */}
          {/* <FontAwesomeIcon icon={faAlternateGitHub} /> */}
          {/* <FontAwesomeIcon icon={faLinkedInIn} /> */}
        </div>
      </div>
    </>
  );
};
