import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.fAQHeadingWrapperParent, className].join(" ")}>
      <div className={styles.fAQHeadingWrapper}>
        <h1 className={styles.frequentlyAskedQuestionsContainer}>
          <p className={styles.frequentlyAsked}>{`Frequently asked `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.questions}>Questions</p>
        </h1>
      </div>
      <div className={styles.fAQDividerContainer}>
        <div className={styles.fAQDivider} />
      </div>
      <div className={styles.fAQContent}>
        <div className={styles.fAQItems}>
          <h1 className={styles.howDoWe}>How do we work ?</h1>
          <div className={styles.fAQItemList}>
            <div className={styles.questionDividerList} />
            <h1 className={styles.question2}>Question-2</h1>
          </div>
          <div className={styles.fAQItemList1}>
            <div className={styles.fAQItemListChild} />
            <h1 className={styles.question3}>Question-3</h1>
          </div>
          <div className={styles.fAQItemList2}>
            <div className={styles.fAQItemListItem} />
            <h1 className={styles.question4}>Question-4</h1>
          </div>
          <div className={styles.fAQItemList3}>
            <div className={styles.fAQItemListInner} />
            <h1 className={styles.question5}>Question-5</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
