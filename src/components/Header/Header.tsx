import { FC } from "react";
import Container from "../Container";
import styles from "./Header.module.css";
import chevronSvg from "../../../public/assets/icons/chevron.svg";
import classNames from "classnames";
import Button from "../Button";

export const Header: FC = ({}) => {
  return (
    <Container className={styles.main}>
      <img src="/assets/logo.png" className={styles.logo} />
      <ul className={styles.navigation}>
        <li className={classNames(styles.navigation__link, styles.active)}>Home</li>
        <li className={classNames(styles.navigation__link, styles.dropdown)}>
          <span>About</span>
          {/* <img src={chevronSvg} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8.07 10 4 4 4-4"
            ></path>
          </svg>
        </li>
        <li className={styles.navigation__link}>Services</li>
        <li className={styles.navigation__link}>Events</li>
        <li className={styles.navigation__link}>Blog</li>
      </ul>
      <div className={styles.cta_buttons}>
        <Button size="small" variant="outlined">
          My Membership
        </Button>
        <Button variant="link">Login</Button>
      </div>
    </Container>
  );
};
