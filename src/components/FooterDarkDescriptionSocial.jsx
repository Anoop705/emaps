import FooterLinksWrapper from "./FooterLinksWrapper";
import PropTypes from "prop-types";
import styles from "./FooterDarkDescriptionSocial.module.css";

const FooterDarkDescriptionSocial = ({ className = "" }) => {
  return (
    <footer
      className={[styles.footerdarkdescriptionsocial, className].join(" ")}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerWrapper}>
          <div className={styles.headerTextParent}>
            <div className={styles.headerText}>
              <h2 className={styles.header}>Header</h2>
            </div>
            <div className={styles.footerDescriptionContainer}>
              <div className={styles.body}>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  `}</div>
              </div>
              <div className={styles.socialIcons}>
                <div className={styles.buttonText}>
                  <img
                    className={styles.iconly}
                    loading="lazy"
                    alt=""
                    src="/iconly.svg"
                  />
                  <b className={styles.button}>Button</b>
                </div>
                <div className={styles.buttonText1}>
                  <img
                    className={styles.iconly1}
                    loading="lazy"
                    alt=""
                    src="/iconly.svg"
                  />
                  <b className={styles.button1}>Button</b>
                </div>
                <div className={styles.buttonText2}>
                  <img
                    className={styles.iconly2}
                    loading="lazy"
                    alt=""
                    src="/iconly.svg"
                  />
                  <b className={styles.button2}>Button</b>
                </div>
                <div className={styles.buttonText3}>
                  <img
                    className={styles.iconly3}
                    loading="lazy"
                    alt=""
                    src="/iconly.svg"
                  />
                  <b className={styles.button3}>Button</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerLinksContainer}>
            <FooterLinksWrapper />
            <FooterLinksWrapper />
            <div className={styles.legalLinksContainer}>
              <div className={styles.headerText1}>
                <h2 className={styles.header1}>Header Text</h2>
              </div>
              <div className={styles.buttonText4}>
                <img className={styles.iconly4} alt="" src="/iconly-4.svg" />
                <b className={styles.button4}>Button</b>
              </div>
              <div className={styles.buttonText5}>
                <img className={styles.iconly5} alt="" src="/iconly-4.svg" />
                <b className={styles.button5}>Button</b>
              </div>
              <div className={styles.buttonText6}>
                <img className={styles.iconly6} alt="" src="/iconly-4.svg" />
                <b className={styles.button6}>Button</b>
              </div>
              <div className={styles.buttonText7}>
                <img className={styles.iconly7} alt="" src="/iconly-4.svg" />
                <b className={styles.button7}>Button</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightContainer}>
        <div className={styles.text}>
          <div className={styles.copyrightContent}>
            All Copyright reserved 2024
          </div>
        </div>
        <div className={styles.copyrightContainerChild} />
      </div>
    </footer>
  );
};

FooterDarkDescriptionSocial.propTypes = {
  className: PropTypes.string,
};

export default FooterDarkDescriptionSocial;
