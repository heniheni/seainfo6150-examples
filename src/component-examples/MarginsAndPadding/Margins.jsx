import React from "react";
import styles from "./marginsandpadding.module.css";

const Margins = () => {
  return (
    <section className={styles.container}>
      <h2>Margins</h2>
      <div className={styles.marginsDiv1}>div 1</div>
      <div className={styles.marginsDiv2}>div 2</div>
      <div className={styles.marginsDiv3}>div 3</div>
      <div className={styles.marginsDiv4}>div 4</div>
      <div className={styles.marginsDiv5}>div 5</div>
    </section>
  );
};

export default Margins;
