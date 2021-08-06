import Image1 from "../images/image-1.jpg";
import Image2 from "../images/image-2.jpg";
const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={Image1} alt="world-1" className="img" />
        <div className="center-content">
          <h2 className="txt-small">The World Is Meant to be your</h2>
          <p className="mb-2">Lorem ipsum dolor sit</p>
        </div>
      </div>
      <div className="menu-card">
        <img src={Image2} alt="world-1" className="img" />
        <div className="center-content">
          <h2 className="txt-small">Just Go And Take It</h2>
          <p className="mb-2">Lorem ipsum dolor sit</p>
        </div>
      </div>
    </>
  );
};

export default Content;
