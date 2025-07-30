import styles from "./ContentBox.module.css";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const ContentBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
