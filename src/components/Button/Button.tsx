import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "filled" | "outlined" | "link";
  size?: "small" | "normal";
  className?: string;
  frontIcon?: JSX.Element;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = "filled",
  size = "normal",
  frontIcon,
}) => {
  const buttonClasses = classNames(styles.main, {
    [`${styles.small}`]: size === "small",
    [`${styles.filled}`]: variant === "filled",
    [`${styles.outlined}`]: variant === "outlined",
    [`${styles.link}`]: variant === "link",
    [`${className}`]: !!className,
  });
  return (
    <button className={buttonClasses}>
      {!!frontIcon && frontIcon}
      <span>{children}</span>
    </button>
  );
};
