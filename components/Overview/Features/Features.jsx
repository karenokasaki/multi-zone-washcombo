import styles from "./Features.module.scss";

export default function Features() {
  const features = [
    {
      title: "LCD Digital Dial Control",
      copy: "Our intuitive control with LCD display shows helpful information with each turn.",
    },
    {
      title: "ezLintFilter",
      copy: "The hands-free design allows you to easily remove lint after every load.",
    },
    {
      title: "ezDispense®",
      copy: "Automatically dispenses the right amount of detergent and fabric softener.",
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

  return (
    <div className={styles["features"]}>
      <div className={styles["features--inner"]}>
        {features.map((item, index) => (
          <div className={styles["features--item"]} key={index}>
            <div className={styles["features--image"]}>
              <img
                src={`${imageDictionary[`overview-feature-${index}.png`]}`}
                alt=""
              />
            </div>
            <div className={styles["features--image"]}>
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
