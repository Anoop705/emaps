import Light from "./Light";
import PropTypes from "prop-types";
import styles from "./ImageNavigation.module.css";

const ImageNavigation = ({ className = "" }) => {
  return (
    <section className={[styles.imageNavigation, className].join(" ")}>
      <div className={styles.imageNavigationContainerParent}>
        <div className={styles.imageNavigationContainer}>
          <div className={styles.imageNavigationWrapper}>
            <div className={styles.imageNavigationContent}>
              <div className={styles.imageNavigationBlockWrapper}>
                <div className={styles.imageNavigationBlock}>
                  <div className={styles.image1Parent}>
                    <img
                      className={styles.image1Icon}
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <h1 className={styles.navigateYourBusinessContainer}>
                      <p className={styles.navigateYourBusiness}>
                        Navigate Your Business
                      </p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.journeyWithEMaps}>
                        {" "}
                        Journey with E-Maps
                      </p>
                      <p className={styles.blankLine1}>&nbsp;</p>
                      <p className={styles.theAllInOneErp}>
                        {" "}
                        The All-in-One ERP Solution
                      </p>
                      <p className={styles.blankLine2}>&nbsp;</p>
                    </h1>
                  </div>
                  <img
                    className={styles.image5Icon}
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.operationsContainerParent}>
              <div className={styles.operationsContainer}>
                <h3 className={styles.streamlineYourBusiness}>
                  Streamline Your Business Operations with Our Comprehensive ERP
                  Solution
                </h3>
                <div className={styles.gettingStartedWrapper}>
                  <button className={styles.gettingStarted}>
                    <div className={styles.button}>{`Getting Started->`}</div>
                    <div className={styles.gettingStartedChild} />
                  </button>
                </div>
              </div>
              <button className={styles.operationsImage}>
                <img
                  className={styles.image4Icon}
                  alt=""
                  src="/image-4@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
        <Light />
      </div>
    </section>
  );
};

ImageNavigation.propTypes = {
  className: PropTypes.string,
};

export default ImageNavigation;
