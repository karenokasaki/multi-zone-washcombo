import styles from "./MegaCapacity.module.scss";
import useIsInViewport from "../../hooks/useIsInViewport";
import { useRef } from "react";

export default function MegaCapacity() {
  const heroRef = useRef();
  const imgInViewport = useIsInViewport(heroRef);
  return (
    <div className={styles["container"]}>
      <div className={styles["container--inner"]}>
        <div className={styles["header"]}>
          <h3>Go big to save time and get more done</h3>
        </div>
        <div className={styles["relative"]}>
          <div
            className={styles["imgs-wrapper"]}
            ref={heroRef}
            data-view={imgInViewport}
          >
            <picture>
              <source
                srcSet="https://media.us.lg.com/transform/48fb5666-70fb-4330-9c41-900015e28f29/washcombo-all-in-one_landing-page_mega-capacity-1-mobile"
                media="(max-width: 767px)"
              />
              <source
                srcSet="https://media.us.lg.com/transform/4effe894-1846-4325-a5ea-6e9bf99edffb/washcombo-all-in-one_landing-page_mega-capacity-1-tablet"
                media="(max-width: 1200px)"
              />
              <img
                src="https://media.us.lg.com/transform/4e85cc69-c97e-4a8d-a1e4-c3bc4ace6283/washcombo-all-in-one_landing-page_mega-capacity-1"
                alt=""
                className={styles["hero-image"]}
              />
              <div className={styles["gradient-overlay"]}></div>
            </picture>
          </div>
          <div className={styles["content"]}>
            <div className={styles["img-cta"]}>
              <img
                src="https://media.us.lg.com/transform/d6208ad2-a563-47d7-a528-82361b992b2c/washcombo-all-in-one_landing-page_mega-capacity-2"
                alt=""
              />
            </div>
            <div className={styles["box"]}>
              <p>
                With 5.0 cubic feet of capacity, the WashCombo™ is LG’s largest
                combo unit available, able to accommodate a king size comforter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
