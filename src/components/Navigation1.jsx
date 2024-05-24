import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.navigationChild} />
      <img
        className={styles.finalCesonLogo1Icon}
        loading="lazy"
        alt=""
        src="/final-ceson-logo-1@2x.png"
      />
      <div className={styles.cesonLogo}>
        <h1 className={styles.ceson}>CESON</h1>
      </div>
      <div className={styles.homeAbout}>
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.homeAbout1}>
        <div className={styles.about}>About</div>
      </div>
      <div className={styles.contactServices}>
        <div className={styles.contactServicesItem}>
          <div className={styles.contactUs}>{`Contact Us `}</div>
          <div className={styles.services}>Services</div>
        </div>
      </div>
      <div className={styles.bt3Wrapper}>
        <button className={styles.bt3}>
          <div className={styles.button}>Sign-Up</div>
          <div className={styles.bt3Child} />
        </button>
      </div>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
