import styles from "../styles/page.module.css";
import { useState } from "react";

export default function Home() {
  //state
  const [dark, setDark] = useState(false);

  //function untuk menghandle
  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <main
      className={`
    ${styles.container_center}
    ${dark ? styles.container_dark : styles.container_light}
    `}
    >
      <h1>Home page</h1>

      <button onClick={handleDark}>dark / light</button>
    </main>
  );
}
