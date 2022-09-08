import { FC } from "react";
import styles from "./HeroPopup.module.css";

interface Props {
  text: string;
  icon: JSX.Element;
  bgColor?: string;
  position: {
    bottom: string;
    right: string;
  };
}

export const HeroPopup: FC<Props> = ({ text, icon, position, bgColor }) => {
  return (
    <div className={styles.main} style={{ bottom: position.bottom, right: position.right, backgroundColor: bgColor }}>
      <span className={styles.text}>{text}</span>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};
