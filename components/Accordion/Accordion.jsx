import styles from "./Accordion.module.scss";
import List from "./List/List";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function Accordion() {
  const width = useScreenWidth();
  const MEDIA_QUERY = 991;

  return (
    <div className={styles["container"]}>
      {/* <div className={styles["bg"]}>
        <img src="https://media.us.lg.com/transform/1128e158-5889-4450-9d7d-66b69cad4fef/washcombo-all-in-one_landing-page_accordion-bg" alt="" />
      </div> */}
      <div className={styles["inner"]}>
        <div className={`${styles["header"]} ${styles["header-mobile"]}`}>
          <h3>Outstanding performance meets peak efficiency </h3>
          <p>
            With the WashCombo™, you’ll save energy and get more done without
            compromise.
          </p>
        </div>
        <div className={styles["graphic"]}>
          <video
            muted
            autoPlay
            playsInline
            controls={false}
            loop
            poster="https://media.us.lg.com/transform/a122f8e5-89ec-4545-8296-19743174e522/washcombo-all-in-one_landing-page_WM6998HBA-Right-Angle_cycle-1"
            src="https://media.us.lg.com/asset/6e91d4d9-a7d1-4120-b3e5-863801e307e7/mp4/washcombo-all-in-one_landing-page_WC_Drum_Spin_heatpump_r4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles["content"]}>
          <div className={styles["content-inner"]}>
            <div className={styles["header"]}>
              <h3>Outstanding performance meets peak efficiency </h3>
              <p>
                With the WashCombo™, you’ll save energy and get more done
                without compromise.
              </p>
            </div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}
