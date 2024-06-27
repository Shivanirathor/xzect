import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { FaPinterest } from "react-icons/fa";
const Companies = () => {
  return (
    <div className="container-2">
      <p>I've worked with some great companies</p>
      <ul className="internet-name">
        <li>Google</li>
        <li>
          <FaSpotify /> <span>Spotify</span>
        </li>
        <li>
          <FaPinterest />
          <span>Pinterest</span>
        </li>
        <li>
          <BiLogoNetlify />
          <span>Netlify</span>
        </li>
        <li>
          <FaApple />
        </li>
        <li>
          <SiAdobe />
          <span>Adobe</span>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Companies;
