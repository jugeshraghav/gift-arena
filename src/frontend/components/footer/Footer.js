import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>Connect With Me @Jugesh Raghav</p>
        <div className="footer-icons">
          <a href="https://www.instagram.com/jugesh_raghav/">
            <FontAwesomeIcon icon={faInstagram} shake />
          </a>
          <a href="https://github.com/jugeshraghav">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jugesh-raghav-7895551a2/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/RaghavJugesh">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </>
  );
};
