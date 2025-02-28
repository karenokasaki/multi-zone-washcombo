import styles from "./Video.module.scss";

export default function Video() {
  return (
    <div className={styles["container"]}>
      <video
        src="https://media.us.lg.com/asset/093be7cc-392f-40d9-b13a-bdc90fb3a395/mp4/washcombo-all-in-one_landing-page_washcombo_heatpump_clip_(Original)"
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
