import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const classes = classNames(styles.main, {
    [`${className}`]: !!className,
  });
  return <div className={classes}>{children}</div>;
};
