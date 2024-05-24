import styles from "./TestimonialsContainer.module.css";

const TestimonialsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.testimonialsContainer, className].join(" ")}>
      <div className={styles.testimonialsContainerChild} />
      <div className={styles.testimonialsHeadingWrapper}>
        <div className={styles.testimonialsHeadingContent}>
          <div className={styles.testimonialsTitleContentParent}>
            <div className={styles.testimonialsTitleContent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.testimonials}>Testimonials</div>
              </div>
            </div>
            <b className={styles.whatArePeople}>What are people saying</b>
          </div>
        </div>
        <div className={styles.thankYouFor}>
          "Thank you for your trust in Crypt Land! We are grateful for your
          feedback and are committed to providing the best [products/services
          offered]. Read what our clients have to say about their experience
          with us.
        </div>
      </div>
      <div className={styles.testimonialCarouselContainer}>
        <img
          className={styles.carouselIcon}
          loading="lazy"
          alt=""
          src="/carousel.svg"
        />
      </div>
    </div>
  );
};

TestimonialsContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialsContainer;
