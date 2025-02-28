import styles from "./Hero.module.scss";
import { useRef, useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import GetItDone from "../GetItDone/GetItDone";
import { useIntersectionObserver } from "usehooks-ts";

export default function Hero({ setShowNav }) {
  const ctaRef = useRef();
  const svgRef = useRef();
  // const ctaInViewport = useIsInViewport(ctaRef);
  const [animate, setAnimate] = useState(false);
  const [showText, setShowText] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [currTime, setCurrTime] = useState(0);
  const entry = useIntersectionObserver(ctaRef, {});
  const ctaInViewport = !!entry?.isIntersecting;

  useEffect(() => {
    if (mobile) {
      if (Math.round(currTime) > 1) {
        setAnimate(true);
      }
    } else {
      if (Math.round(currTime) > 5) {
        setAnimate(true);
      }
    }
  }, [currTime, mobile]);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 767);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (ctaRef.current) {
      if (ctaInViewport) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    } else {
      setShowNav(false);
    }
  }, [ctaInViewport, setShowNav]);

  function handleVideoStart() {
    setAnimate(false);
    setShowText(false);
  }

  return (
    <div className={styles["module-wrapper"]}>
      <div className={styles["wrapper"]}>
        <div
          ref={svgRef}
          className={styles["sticky-wrapper"]}
          style={{
            opacity: 0,
            top: "70%",
            left: "55%",
          }}
        >
          <Icon name="Clothes" />
        </div>
        <div className={styles["video-wrapper"]}>
          <video
            src={mobile ? "https://media.us.lg.com/asset/a43cfa7d-160a-4397-9b28-3df6080cd72a/mp4/washcombo-all-in-one_landing-page_Wc Intro R1 Tablet" : "https://media.us.lg.com/asset/41ee14b9-bf42-437b-972c-3df686ead325/mp4/washcombo-all-in-one_landing-page_WC_Intro_animatic_r5"}
            type="video/mp4"
            className={styles["bg-video"]}
            autoPlay
            playsInline
            muted
            onPlay={(e) => {
              e.currentTarget.currentTime < e.currentTarget.duration
                ? handleVideoStart()
                : null;
            }}
            onTimeUpdate={(e) => setCurrTime(e.currentTarget.currentTime)}
            // onEnded={mobile ? handleVideoEnded : null}
          />
        </div>
        <div className={styles["container"]}>
          <div className={styles["content"]} data-animate={animate}>
            <div className={styles["content-inner"]}>
              <div className={styles["text"]}>
                <div
                  className={styles["fade-in-logo"]}
                  onAnimationStart={() => setShowText(false)}
                  onAnimationEnd={() => setShowText(true)}
                >
                  <img
                    src="https://media.us.lg.com/transform/b699071e-9569-41b5-99ef-e4ce6e79997f/washcombo-all-in-one_landing-page_washcombo-logo-vertical"
                    alt=""
                  />
                </div>
                <div className={styles["text--inner"]} data-show={showText}>
                  <img
                    src="https://media.us.lg.com/transform/e49cf439-5f5f-4d67-9897-697bcb6dd595/washcombo-all-in-one_landing-page_washcombo-logo"
                    alt=""
                  />
                  <h3>Get It Done In One</h3>
                  <p>
                    The LG WashCombo™ All-in-One is a mega capacity combination
                    laundry solution that washes and dries laundry as fast as 2
                    hours* without the need for load transfer. The future of
                    laundry has arrived.
                  </p>
                  <div className={`cta ${styles["cta"]}`} ref={ctaRef}>
                    <a
                      href="https://www.lg.com/us/washers-dryers/lg-wm6998hba"
                      className="newbtn"
                      data-ms-event="lgEvent"
                      data-ms-action="click - get it done in one"
                      data-ms-label="Shop Now"
                    >
                      Shop Now
                    </a>
                  </div>
                  <p className={styles["disclaimer"]}>
                    *Based on independent testing in Wash+Dry cycle with Dryer
                    on Energy Saver mode, 10 lb. DOE load (October 2023). Cycle
                    time may vary depending on load type/weight. Full capacity load approximately 20 lb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetItDone showText={showText} />
    </div>
  );
}
