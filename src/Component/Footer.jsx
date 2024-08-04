import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";
import Image from 'next/image';
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Image
          src="https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1>Shivani Rathor</h1>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.vimeo.com" target="_blank">
            <FaVimeo />
          </a>
        </div>
        <p>
          Hi, I'm A motivated and well-organized professional with a strong
          passion for front-end development. I am committed to utilizing my
          technical skills to actively contribute to the development of creative
          and cutting-edge web solutions.
        </p>
      </div>
      <p className="ending">
        2022 © Akio. All Right Reserved. Published with Hugo and Akio.
      </p>
    </div>
  );
};

export default Footer;
