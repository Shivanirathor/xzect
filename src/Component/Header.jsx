const Header = () => {
  return (
    <div class="container">
      <div class="text-1">
        <img src="/images/myImg.jpg" alt="" />
        <p class="name">
          Hey everyone,
          <br />
          I’m Shivani Rathor
        </p>
        <p class="para">
          Hi, I'm A motivated and well-organized professional with a strong
          passion for front-end development. I am committed to utilizing my
          technical skills to actively contribute to the development of creative
          and cutting-edge web solutions.
        </p>
        <div>
          <input
            class="email-text"
            type="text"
            placeholder="Your email address..."
          />
          <button class="sub-btn">Subscribe</button>
        </div>
      </div>
      <div class="img-1">
        <img src="./images/img-1.jpg" alt="img-1" />
      </div>
    </div>
  );
};

export default Header;
