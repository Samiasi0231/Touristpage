import "./index.css";

const images = [
  "https://html-templates.evonicmedia.com/adventurist/assets/images/index/header-slider1.webp",
  "https://html-templates.evonicmedia.com/adventurist/assets/images/index/header-slider2.webp",
  "https://html-templates.evonicmedia.com/adventurist/assets/images/index/header-slider3.webp",
  // Add more image filenames as needed
];

const index = ({ myCount }) => {
  if (myCount === 0) {
    return (
      <img
        src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/header-slider1.webp"
        className="background fade-in"
        alt=""
      />
    );
  } else if (myCount === 1) {
    return (
      <img
        src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/header-slider2.webp"
        className="background fade-in"
        alt=""
      />
    );
  } else if (myCount === 2) {
    return (
      <>
        <img
          src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/header-slider3.webp"
          className="background fade-in"
          alt=""
        />
      </>
    );
  }
};

export default index;
