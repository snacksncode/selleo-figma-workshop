import { FC } from "react";
import Button from "../Button";
import Container from "../Container";
import styles from "./Hero.module.css";
import HeroPopup from "../HeroPopup";

export const Hero: FC = () => {
  return (
    <Container className={styles.main}>
      <div className={styles.trap}>
        <HeroPopup
          position={{ right: "480px", bottom: "464px" }}
          text="280kcal/100g"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M18.99 13.8 19 15h-4.5a.5.5 0 0 1-.5-.5v-3.19C14 6.72 16.23 3 18.99 3l.01.01V3v12" />
                <path d="M16 15h3v4.5c0 .83-.67 1.5-1.5 1.5v0a1.5 1.5 0 0 1-1.5-1.5V15Z" clip-rule="evenodd" />
                <path d="M7.5 10.4V13" />
                <rect width="3" height="8" x="6" y="13" rx="1.5" />
                <path d="M7.5 7.5V3.25M10 3v5.4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3m5 4.5H5" />
              </g>
            </svg>
          }
        />
        <HeroPopup
          position={{ right: "32px", bottom: "32px" }}
          text="milk, wheat"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m14.03 4.14 7.66 13.4a2.34 2.34 0 0 1-2.03 3.5H4.34a2.34 2.34 0 0 1-2.03-3.5l7.66-13.4a2.34 2.34 0 0 1 4.06 0Z M12 13.12V9.38m0 6.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
              />
            </svg>
          }
        />
        <img className={styles.background} src="/assets/hero-bg.png" alt="An image of some delicious pasta" />
        <h1 className={styles.heading}>School Nutrition Training</h1>
        <h3 className={styles.subheading}>USDA-approved Professional Standards Tracking and More</h3>
        <div className={styles.main_cta}>
          <Button variant="filled" size="normal">
            Get started
          </Button>
          <Button variant="outlined" size="normal">
            Learn more
          </Button>
        </div>
      </div>
      <Button
        className={styles.secondary_cta}
        frontIcon={
          <svg className={styles.secondary_cta_icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8.07 10 4 4 4-4"
            ></path>
          </svg>
        }
        variant="outlined"
        size="small"
      >
        Scroll for more
      </Button>
    </Container>
  );
};
