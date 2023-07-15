import styles from "./styles.module.css";
import { AiFillStar } from "react-icons/ai";

function IconRepeat({ color }) {
  const iconCount = 5; // Number of times to repeat the icon

  return (
    <div className={styles.icon_repeat}>
      {[...Array(iconCount)].map((_, index) => (
        <AiFillStar key={index} style={{ color }} />
      ))}
    </div>
  );
}

const TextSlideCard = ({ listItem }) => {
  return (
    <div className={styles.slide_container}>
      <div className={styles.paragraph_container}>
        <p className={styles.testimonial}>{listItem.testimonial}</p>
        <IconRepeat color="#FF9529" />
      </div>

      <p className={styles.name}>{listItem.name}</p>
      <p className={styles.city} style={{ fontWeight: "bold" }}>
        {listItem.city}
      </p>
    </div>
  );
};

export default TextSlideCard;
