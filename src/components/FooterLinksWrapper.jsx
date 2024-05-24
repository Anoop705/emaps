import styles from "./FooterLinksWrapper.module.css";

const FooterLinksWrapper = ({ className = "" }) => {
  return (
    <div className={[styles.footerLinksWrapper, className].join(" ")}>
      <div className={styles.footerLinkColumns}>
        <div className={styles.headerText}>
          <h2 className={styles.header}>Header Text</h2>
        </div>
      </div>
      <div className={styles.buttonText}>
        <img
          className={styles.iconly}
          loading="lazy"
          alt=""
          src="/iconly-4.svg"
        />
        <b className={styles.button}>Button</b>
      </div>
      <div className={styles.buttonText1}>
        <img
          className={styles.iconly1}
          loading="lazy"
          alt=""
          src="/iconly-4.svg"
        />
        <b className={styles.button1}>Button</b>
      </div>
      <div className={styles.buttonText2}>
        <img
          className={styles.iconly2}
          loading="lazy"
          alt=""
          src="/iconly-4.svg"
        />
        <b className={styles.button2}>Button</b>
      </div>
      <div className={styles.buttonText3}>
        <img
          className={styles.iconly3}
          loading="lazy"
          alt=""
          src="/iconly-4.svg"
        />
        <b className={styles.button3}>Button</b>
      </div>
    </div>
  );
};

FooterLinksWrapper.propTypes = {
  className: PropTypes.string,
};

export default FooterLinksWrapper;
