import styles from "./Pedestals.module.scss";
import Icon from "../../Icon/Icon";
import { useState, useRef, useEffect } from "react";
import useIsInViewport from "../../../hooks/useIsInViewport";

export default function Pedestals() {
  const ref = useRef();
  const isInViewport = useIsInViewport(ref);
  const [activePedestal, setActivePedestal] = useState(0);
  const [clientX, setClientX] = useState(null);

  useEffect(() => {
    if (isInViewport) {
      setActivePedestal(0);
    }
  }, [isInViewport]);

  const pedestals = [
    {
      title: "Sidekick®",
      copy: "The LG SideKick® tackles small, custom-care loads so you can run two cycles at the same time.",
      link: "https://www.lg.com/us/washers-dryers/lg-wd300cb-pedestal-washer",
    },
    {
      title: "Storage Drawer",
      copy: "Get the extra storage you need while raising your washer and dryer to the perfect height.",
      link: "https://www.lg.com/us/appliances-accessories/lg-wdp6m-pedestal-storage-drawer",
    },
    {
      title: "Riser",
      copy: 'Our ADA compliant riser lifts your machine by 5" for a more convenient height and easier access.',
      link: "https://www.lg.com/us/appliances-accessories/lg-wdps1b-laundry-pedestal-riser",
    },
  ];

  const imageDictionary = {
    "overview-pedestals-1.png" : "https://media.us.lg.com/transform/18caa64e-9af9-400d-8fec-78a520f4c817/washcombo-all-in-one_landing-page_overview-pedestals-1",
    "overview-pedestals-2.png" : "https://media.us.lg.com/transform/b59ca472-e13b-419f-80e3-d44cc1b482a0/washcombo-all-in-one_landing-page_overview-pedestals-2",
    "overview-feature-2.png" : "https://media.us.lg.com/transform/e8c9c854-bc9b-4d04-9e6f-8eb047f2209f/washcombo-all-in-one_landing-page_overview-feature-2",
    "overview-pedestals-0.png" : "https://media.us.lg.com/transform/715ba483-5e28-4d70-992a-846aab58140a/washcombo-all-in-one_landing-page_overview-pedestals-0",
    "overview-feature-1.png" : "https://media.us.lg.com/transform/8c8039bd-3d15-43d6-81cd-fdb9b67e5f56/washcombo-all-in-one_landing-page_overview-feature-1",
    "overview-feature-0.png" : "https://media.us.lg.com/transform/397fdda4-9fce-42c9-ad85-0e8c14c6b8a3/washcombo-all-in-one_landing-page_overview-feature-0"
  }

  function handleNextSlide() {
    if (activePedestal < pedestals.length - 1) {
      setActivePedestal((prev) => prev + 1);
    }
  }

  function handlePrevSlide() {
    if (activePedestal > 0) setActivePedestal((prev) => prev - 1);
  }

  function handleSwipeSlide(e) {
    let endClientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    let swipeDistance = Math.abs(endClientX - clientX);
    if (swipeDistance > 30) {
      endClientX < clientX ? handleNextSlide() : handlePrevSlide();
    }
    setClientX(null);
  }

  return (
    <div className={styles["pedestals"]} data-active={activePedestal} ref={ref}>
      <div className={styles["pedestals--inner"]}>
        <h3>
          The <span className={styles["red"]}>Pedestals*</span>
        </h3>
        <div
          className={styles["pedestals--container"]}
          style={{ transform: `translateX(-${activePedestal}00%)` }}
        >
          {pedestals.map((slide, index) => (
            <div
              className={styles["pedestals--slide"]}
              key={index}
              onMouseDown={(e) => setClientX(e.clientX)}
              onTouchStart={(e) => setClientX(e.changedTouches[0].clientX)}
              onMouseUp={(e) => handleSwipeSlide(e)}
              onTouchEnd={(e) => handleSwipeSlide(e)}
            >
              <div className={styles["pedestals--img"]}>
                <img
                  src={`${imageDictionary[`overview-pedestals-${index}.png`]}`}
                  alt=""
                  draggable="false"
                />
              </div>
              <div className={styles["pedestals--text"]}>
                <div className={styles["pedestals--text--inner"]}>
                  <h4>{slide.title}</h4>
                  <p>{slide.copy}</p>
                  <div className={`cta ${styles["cta"]}`}>
                    <a
                      className="newbtn"
                      href={slide.link}
                      data-ms-event="lgEvent"
                      data-ms-action={`click - ${slide.title}`}
                      data-ms-label="Shop Now"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["pedestals--btns"]}>
          <button
            onClick={handlePrevSlide}
            aria-label="Previous"
            className={styles["pedestals--btns--prev"]}
            disabled={activePedestal === 0}
          >
            <span>Previous</span>
            <Icon name="CarouselArrow" />
          </button>
          <div className={styles["pedestals--btns--slides"]}>
            {pedestals.map((slide, index) => (
              <button
                key={index}
                aria-label={slide.title}
                onClick={() => setActivePedestal(index)}
                data-active={activePedestal === index}
              >
                <span>{slide.title}</span>
              </button>
            ))}
          </div>
          <button
            onClick={handleNextSlide}
            aria-label="Next"
            className={styles["pedestals--btns--next"]}
            disabled={activePedestal === pedestals.length - 1}
          >
            <span>Next</span>
            <Icon name="CarouselArrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
