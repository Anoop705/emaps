import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./Reviews.module.css";

const Reviews = ({ className = "" }) => {
  return (
    <div className={[styles.reviews, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h2 className={styles.iReallyLikeContainer}>
          <p className={styles.iReallyLike}>
            I really like the system at this management,
          </p>
          <p className={styles.iLoveRecommending}>
            i love recommending this software to you
          </p>
          <p className={styles.guys}>guys</p>
        </h2>
        <div className={styles.testimonialAuthorInfo}>
          <div className={styles.testimonialAuthorDetails}>
            <img
              className={styles.component28Icon}
              alt=""
              src="/component-28-1@2x.png"
            />
            <img
              className={styles.avataruserpicIcon}
              loading="lazy"
              alt=""
              src="/avataruserpic1@2x.png"
            />
          </div>
          <div className={styles.testimonialAuthorPosition}>
            <h2 className={styles.ashleyCooper}>Alfredo Lubin</h2>
            <img
              className={styles.component29Icon}
              alt=""
              src="/component-29-1.svg"
            />
          </div>
          <div className={styles.invertedCommaWrapper}>
            <img
              className={styles.invertedCommaIcon}
              loading="lazy"
              alt=""
              src="/inverted-comma@2x.png"
            />
          </div>
        </div>
      </div>
      <GroupComponent
        weAlighnOurSucceessWithTh="“We alighn our succeess with the success"
        ofOurCustomersWhichIsWhyO="of our customers which is why our offering"
        transcendsOurSoftware="transcends our software”."
        component28="/component-28-2@2x.png"
        ashleyCooper="Randy Levin"
      />
      <GroupComponent
        weAlighnOurSucceessWithTh="I really like the system at this management,"
        ofOurCustomersWhichIsWhyO="i love recommending this software to you"
        transcendsOurSoftware="guys"
        component28="/component-28-3@2x.png"
        ashleyCooper="Angel Mango"
        propWidth="517px"
        propWidth1="219px"
      />
    </div>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
};

export default Reviews;
