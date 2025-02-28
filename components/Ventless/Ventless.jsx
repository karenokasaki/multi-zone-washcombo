import styles from "./Ventless.module.scss";
import Modal from "./Modal/Modal";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Ventless({ setDisableLenis }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [action, setAction] = useState("");

  useLayoutEffect(() => {
    document.body.style.overflowY = "auto";
  }, []);

  useEffect(() => {
    setDisableLenis(modalOpen);
    document.body.style.overflowY = modalOpen ? "hidden" : "auto";
  }, [modalOpen, setDisableLenis]);

  const cards = [
    {
      img: "https://media.us.lg.com/transform/1e5dce29-431b-40b2-9d4e-53a2d8c5253a/washcombo-all-in-one_landing-page_ventless-img-1",
      header: "All-new ventless standalone dryer",
      content:
        "Introducing our most energy efficient dryer, that easily installs just about anywhere in your space.",
      cta: "Shop now",
      action: "all new ventless dryer",
      url: "https://www.lg.com/us/washers-dryers/lg-dlhc5502b-electric-dryer",
    },
    {
      img: "https://media.us.lg.com/transform/4314266a-a6b4-470b-bc1b-5867b28280f1/washcombo-all-in-one_landing-page_ventless-img-2",
      header: "WashTower™ featuring ventless drying",
      content:
        "Meet our WashTower™ with a ventless dryer, featuring everything you love about our iconic, single control panel design.",
      cta: "Shop now",
      action: "washtower",
      url: "https://www.lg.com/us/washers-dryers/lg-wkhc202hba-washtower",
    },
  ];

  return (
    <div className={styles["container"]}>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        action={action}
      />
      <div className={styles["container--inner"]}>
        <div className={styles["content"]}>
          <div className={styles["content--inner"]}>
            <div className={styles["ventlessDrying"]}>
              <img
                src="https://media.us.lg.com/transform/26f7b7f0-1fd7-4c3c-a66c-e3aa2a6e99a8/washcombo-all-in-one_landing-page_VentlessDryingCTA"
                alt=""
              />
            </div>
            <div className={styles["header"]}>
              <h2>More ventless laundry solutions from LG</h2>
              <p>
                We’re expanding our ventless laundry product offerings to better
                fit your home’s needs and as a part of our{" "}
                <a
                  data-ms-event="lgEvent"
                  data-ms-action="go to electrification website - click"
                  data-ms-label="commitment to electrification"
                  href="https://www.lg.com/us/home-electrification"
                  target="_blank"
                  rel="noreferrer"
                >
                  commitment to electrification.
                </a>
              </p>
            </div>

            <div className={styles["cards"]}>
              {cards.map((card, index) => (
                <div className={styles["card"]} key={index}>
                  <div className={styles["card--img"]}>
                    <img src={card.img} alt="" />
                  </div>
                  <div className={styles["card--inner"]}>
                    <div className={styles["card--content"]}>
                      <p className={styles["card--content--header"]}>
                        {card.header}
                      </p>
                      <p className={styles["card--content--text"]}>
                        {card.content}
                      </p>
                    </div>
                    <div className={`cta ${styles["cta"]}`}>
                      <a
                        className="newbtn"
                        role="button"
                        data-ms-event="lgEvent"
                        data-ms-action={`click - ${card.action}`}
                        data-ms-label={card.cta}
                        href={card.url}
                        // onClick={() => {
                        //   setAction(card.action);
                        //   setModalOpen(true);
                        // }}
                      >
                        {card.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles["lg-logo"]}>
            <img src="https://media.us.lg.com/transform/22e06ee5-061f-4c25-9a1d-412e74d367c7/washcombo-all-in-one_landing-page_LG" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
