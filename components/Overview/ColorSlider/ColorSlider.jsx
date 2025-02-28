import styles from "./ColorSlider.module.scss";
import { useState } from "react";

export default function ColorSlider() {
  const [activeColor, setActiveColor] = useState(1);
  const [showLabel, setShowLabel] = useState(null);
  const colors = [
    { name: "Graphite Steel", hex: "#a6a6a6", url: "https://media.us.lg.com/transform/fb3a2624-d728-4a92-b0a1-506abf5a752b/washcombo-all-in-one_landing-page_WM6998HVA-Front-Background-Removed-1"},
    { name: "Black Steel", hex: "#3c3a3b", url: "https://media.us.lg.com/transform/defa26e9-9e51-4cdc-8d73-d514b600508a/washcombo-all-in-one_landing-page_WM6998HVA-Front-Background-Removed-0"},
  ];


  return (
    <div className={styles["color-carousel"]}>
      <div className={styles["color-carousel-btns"]}>
        {colors.map((color, index) => (
          <button
            aria-label={color.name}
            key={index}
            data-active={activeColor === index}
            onClick={() => setActiveColor(index)}
            style={{ backgroundColor: color.hex }}
            onMouseEnter={() => setShowLabel(color.name)}
            onMouseLeave={() => setShowLabel(null)}
          >
            <span className={styles["name"]}>{color.name}</span>
            <div
              className={styles["color-label"]}
              data-show={showLabel === color.name}
              data-color={color.name}
            >
              <span>{color.name}</span>
            </div>
          </button>
        ))}
      </div>
      <div className={styles["color-carousel-slide"]}>
        {colors.map((item, index) => (
          <img
            key={index}
            src={item.url}
            alt=""
            data-active={activeColor === index}
          />
        ))}
      </div>
    </div>
  );
}
