import { useMemo, useRef, useState } from "react";
import styles from "./UnderTheStairs.module.scss";
import ReactSlick from "react-slick";
import useScreenWidth from "../../hooks/useScreenWidth";
import "slick-carousel/slick/slick.css";

export default function UnderTheStairs() {
  const screenWidth = useScreenWidth();

  const breakpoints = {
    DESKTOP: 991,
    TABLET: 575,
  };

  const content = useMemo(
    () => [
      {
        image: "https://media.us.lg.com/transform/c5a2d805-48c4-4c11-a5b1-a09eeeceddf1/washcombo-all-in-one_landing-page_under-the-stairs",
        title: "Under the Stairs",
        copy: "Your home’s awkward nooks & crannies transform from forgotten corners to functional spaces.",
      },
      {
        image: "https://media.us.lg.com/transform/9c83ed7a-9469-4624-852c-e20e5dd47654/washcombo-all-in-one_landing-page_in-the-bathroom",
        title: "In The Bathroom",
        copy: "No more leaving laundry trails across the house—situate your WashCombo™ in the linen closet to create your one-stop shop.",
      },
      {
        image: "https://media.us.lg.com/transform/525557f2-b077-44e5-8431-9d613b4d494a/washcombo-all-in-one_landing-page_in-the-basement",
        title: "In The Basement",
        copy: "Less workouts, more loads in. Forget hauling laundry up & down the stairs from washer to dryer.",
      },
      {
        image: "https://media.us.lg.com/transform/a2f1e250-710a-4f67-af20-3197760978a7/washcombo-all-in-one_landing-page_in-the-hallway",
        title: "In The Hallway",
        copy: "Convenience at your doorstep– literally. Bring big performance and sleek style to your hallway or bonus storage closet. ",
      },
      {
        image: "https://media.us.lg.com/transform/81296afa-3142-4318-8de0-e6c415308e92/washcombo-all-in-one_landing-page_in-the-gym",
        title: "In The Gym",
        copy: "Add practicality and style to your home gym without taking up much space. Your fitness wardrobe will thank you.",
      },
    ],
    []
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Make any space your laundry room</h3>
        <p>Set up a stylish laundry station anywhere you have a water line.</p>
      </div>
      <div className={styles.cards}>
        {screenWidth >= breakpoints.DESKTOP ? (
          <Cards cards={content} desktop />
        ) : (
          <Carousel
            cards={content}
            variant={screenWidth <= breakpoints.TABLET ? "mobile" : "tablet"}
          />
        )}
      </div>
    </div>
  );
}

function Cards({ cards, desktop }) {
  return cards.map(({ image, copy, title }, i) => (
    <CarouselCard
      title={title}
      copy={copy}
      image={image}
      desktop={desktop}
      key={i}
    />
  ));
}

function Carousel({ cards, variant = "mobile" }) {
  const carouselRef = useRef(null);

  const config = {
    tablet: { idx: 2.5, dotIdx: 2, slidesToShow: 2.5, slidesToScroll: 2 },
    mobile: { idx: 3.75, dotIdx: 4, slidesToShow: 1.25, slidesToScroll: 1 },
  };

  function handleIndexChange(index) {
    if (!carouselRef.current) return;
    const lastDot = carouselRef.current
      ?.getElementsByClassName("slick-dots")[0]
      ?.getElementsByTagName("li")[config[variant].dotIdx];

    if (index === config[variant].idx) {
      lastDot.classList.add("slick-active");
    } else {
      lastDot.classList.remove("slick-active");
    }
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: config[variant].slidesToScroll,
    slidesToShow: config[variant].slidesToShow,
    centerMode: false,
    centerPadding: "0",
    slide: "react-slick__slide",
    beforeChange: (_, newIndex) => {
      handleIndexChange(newIndex);
    },
  };

  return (
    <div className={styles.carrousel} ref={carouselRef}>
      <ReactSlick {...settings}>
        {cards.map(({ image, copy, title }) => (
          <div key={title} className={styles["carousel-card-wrapper"]}>
            <CarouselCard title={title} copy={copy} image={image} />
          </div>
        ))}
      </ReactSlick>
    </div>
  );
}

function CarouselCard({ title, copy, image, desktop }) {
  const [active, setActive] = useState(false);
  const space = title?.lastIndexOf(" ");

  return (
    <div className={styles["carousel-card"]} data-show-overlay={active}>
      <div className={styles.overlay} onClick={() => setActive(false)}>
        <h2>
          {title.slice(0, space)} <span>{title.slice(space)}</span>
        </h2>
        <p>{copy}</p>
      </div>
      {!desktop && !active ? (
        <div className={styles["card-callout"]} onClick={() => setActive(true)}>
          <p>TAP TO EXPLORE</p>
        </div>
      ) : (
        <></>
      )}
      <img src={image} alt="" className={styles.image} />
    </div>
  );
}
