import { useMemo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  weAlighnOurSucceessWithTh,
  ofOurCustomersWhichIsWhyO,
  transcendsOurSoftware,
  component28,
  ashleyCooper,
  propWidth,
  propWidth1,
}) => {
  const weAlighnOurContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <h2
        className={styles.weAlighnOurContainer}
        style={weAlighnOurContainerStyle}
      >
        <p className={styles.weAlighnOur}>{weAlighnOurSucceessWithTh}</p>
        <p className={styles.ofOurCustomers}>{ofOurCustomersWhichIsWhyO}</p>
        <p className={styles.transcendsOurSoftware}>{transcendsOurSoftware}</p>
      </h2>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup} style={frameDivStyle}>
          <div className={styles.component28Wrapper}>
            <img
              className={styles.component28Icon}
              loading="lazy"
              alt=""
              src={component28}
            />
          </div>
          <div className={styles.ashleyCooperParent}>
            <h2 className={styles.ashleyCooper}>{ashleyCooper}</h2>
            <img
              className={styles.component29Icon}
              alt=""
              src="/component-29-1.svg"
            />
          </div>
        </div>
        <img className={styles.frameItem} />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  weAlighnOurSucceessWithTh: PropTypes.string,
  ofOurCustomersWhichIsWhyO: PropTypes.string,
  transcendsOurSoftware: PropTypes.string,
  component28: PropTypes.string,
  ashleyCooper: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default GroupComponent;
