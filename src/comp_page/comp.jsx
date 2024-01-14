import PropTypes from "prop-types";
import styles from "./comp.module.css";

const emailPanel = [
  {
    description: "Email Us To Order Now",
    bgimage:
      "https://m.media-amazon.com/images/I/718e6Wtg0fL._AC_UL480_FMwebp_QL65_.jpg",
  },
];
const enquirePanel = [
  {
    description: "Submit your maik ID We will get back to you",
    bgimage:
      "https://m.media-amazon.com/images/I/718e6Wtg0fL._AC_UL480_FMwebp_QL65_.jpg",
  },
];
const featureSection = [
  {
    id: 1,
    title: "MagSafe",
    description:
      "There continue to be MagSafe magnets at the back of the iPhone 15 models",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrJBwqQwl1Bs-9NxwFHvok7R1v6piM5zVo4yD_dnFLwHQ7AfE_qwkv_WU9Mk5XEmnsz4&usqp=CAU",
  },
  {
    id: 2,
    title: "Crash Detection",
    description:
      "There's a high dynamic range gyroscope and a dual-core accelerometer.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdtqOmREzYv8la7ld00LOjFePw1bGZn5Mdg&usqp=CAU",
  },
  {
    id: 3,
    title: "Emergency SOS",
    description:
      "All iPhone 15 models can connect to satellites in emergency situations",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDvmfp2-hv5P1HwYM-wFKVhBjlrSsz-pQ3w&usqp=CAU",
  },
];

const reviewSection = [
  {
    id: 1,
    title: "John Smith",
    description: "Got the iPhone 15; it's so slim",
    icon: "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-acid-colored-shirt-black-trousers-displeased_140725-14953.jpg?size=626&ext=jpg",
  },
  {
    id: 2,
    title: "Mark Antony",
    description: "My new iPhone 15 camera is soooo good.",
    icon: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1233402865.1705244685&semt=sph",
  },
  {
    id: 3,
    title: "Leo das",
    description: "Really a good product",
    icon: "https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.1233402865.1705244685&semt=sph",
  },
];

const showCaseSection = [
  {
    title: "Triple-Lens Rear Camera",
    description:
      "This year, the lens supports 24-megapixel and 48-megapixel high-resolution photos through the Photonic Engine, rather than 12-megapixel and 48-megapixel. Apple says that the new 24-megapixel setting offers ultra high-resolution at a reasonable file size, and both the 24-megapixel and 48-megapixel photos can be saved in a standard HEIF image file format and are not limited to RAW.",
    icon: "https://nillkin.org/image/data/lenta/17875/1%20(1).jpg",
  },
  {
    title: "Design",
    description:
      "The 6.1-inch iPhone 15 Pro and 6.7-inch iPhone 15 Pro Max (measured diagonally at the display) have the same general design as the iPhone 14 Pro and iPhone 14 Pro Max, but with more contoured edges that change the feel of the devices in the hand and lend a more modern design.",
    icon: "https://images.macrumors.com/t/FLu5vrz3QJq8ppHtUZTbkHi0TwU=/1600x0/article-new/2023/09/iphone-15-pro.jpg",
  },
  {
    title: "Action Button",
    description:
      "The Action button on the iPhone 15 Pro and iPhone 15 Pro Max replaces the Ring/Silent switch above the volume buttons on the left side. Apple designed the Action button to be customizable, and it can be set to perform one of several different actions in the Settings app.",
    icon: "https://images.macrumors.com/t/kptTsoSPTpoZgLSIpE17Q5T9wq4=/1600x0/article-new/2023/09/Apple-iPhone-15-Pro-lineup-Action-button-230912.jpg",
  },
];

const AddemailPanel = ({ data }) => {
  return (
    <div className={styles["AddemailPanel"]}>
      {data.map((props, index) => (
        <div key={index} className={styles["AddemailPanel-all"]}>
          <h2>{props.description}</h2>
          <input
            className={styles["AddemailPanel-emailbox"]}
            type="email"
            name="fname"
          />
          <input
            className={styles["AddemailPanel-submit"]}
            type="submit"
            value="Submit"
          />
        </div>
      ))}
    </div>
  );
};
AddemailPanel.propTypes = {
  description: PropTypes.string,
  bgimage: PropTypes.string,
};

const AddshowCaseSection = ({ data }) => {
  return (
    <div className={styles["AddshowCaseSection"]}>
      {data.map((props, index) => (
        <div key={index} className={styles["AddshowCaseSection-all"]}>
          <div className={styles["AddshowCaseSection-desc"]}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <img src={props.icon} alt={props.title} />
        </div>
      ))}
    </div>
  );
};

AddshowCaseSection.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
};

const AddfeatureSection = ({ data }) => {
  return (
    <div className={styles["AddfeatureSection"]}>
      {data.map((props, index) => (
        <div key={index} className={styles["AddfeatureSection-all"]}>
          <h3>{props.title}</h3>
          <img
            src={props.icon}
            alt={props.title}
            className={styles["AddfeatureSection-icon"]}
          />
          <p>{props.description}</p>
        </div>
      ))}
    </div>
  );
};

AddfeatureSection.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

const FullPage = () => {
  return (
    <div>
      <div className={styles["AddfeatureSection-FullPage"]}>
        <AddemailPanel data={emailPanel} />
        <AddfeatureSection data={featureSection} />
        <AddshowCaseSection data={showCaseSection} />
        <AddemailPanel data={enquirePanel} />
        <AddfeatureSection data={reviewSection} />
      </div>
    </div>
  );
};

export default FullPage;
