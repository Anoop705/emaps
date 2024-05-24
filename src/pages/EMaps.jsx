import Navigation1 from "../components/Navigation1";
import ImageNavigation from "../components/ImageNavigation";
import FrameComponent1 from "../components/FrameComponent1";
import TestimonialsContainer from "../components/TestimonialsContainer";
import Reviews from "../components/Reviews";
import FrameComponent from "../components/FrameComponent";
import FooterDarkDescriptionSocial from "../components/FooterDarkDescriptionSocial";
import styles from "./EMaps.module.css";

const EMaps = () => {
  return (
    <div className={styles.eMaps}>
      <Navigation1 />
      <ImageNavigation />
      <FrameComponent1 />
      <section className={styles.secondSectionWrapper}>
        <div className={styles.secondSection}>
          <TestimonialsContainer />
          <Reviews />
        </div>
      </section>
      <FrameComponent />
      <FooterDarkDescriptionSocial />
    </div>
  );
};

export default EMaps;
