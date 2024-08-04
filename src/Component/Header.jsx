import Image from 'next/image';
const Header = () => {
  return (
    <div className="container">
      <div className="text-1">
        <Image src="/images/myImage.jpg" alt="" />
        <p className="name">
          Hey everyone,
          <br />
          I’m Shivani Rathor
        </p>
        <p className="para">
          Hi, I'm A motivated and well-organized professional with a strong
          passion for front-end development. I am committed to utilizing my
          technical skills to actively contribute to the development of creative
          and cutting-edge web solutions.
        </p>
        <div>
          <input
            className="email-text"
            type="text"
            placeholder="Your email address..."
          />
          <button className="sub-btn">Subscribe</button>
        </div>
      </div>
      <div className="Image-1">
        <Image src="/images/Image-1.jpg" alt="Image-1" />
      </div>
    </div>
  );
};

export default Header;
