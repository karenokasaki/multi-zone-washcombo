export default function ResponsiveImg({ img }) {

  const imageDictionary = {
    "Mobile-installation.jpg": "https://media.us.lg.com/transform/6015cfc0-958e-4a3b-be29-5bb7d3532d39/washcombo-all-in-one_landing-page_Mobile-installation",
    "Mobile-all-in-one.jpg": "https://media.us.lg.com/transform/67170cd4-baea-4765-b3d2-f61a1adde58f/washcombo-all-in-one_landing-page_Mobile-all-in-one",
    "Mobile-dimensions.jpg": "https://media.us.lg.com/transform/995fa66f-30a5-403b-8a0c-d2b03190f1a6/washcombo-all-in-one_landing-page_Mobile-dimensions",
    "In-Between-all-in-one.jpg": "https://media.us.lg.com/transform/56bda636-c2b9-4986-97db-8a8ea827bd4a/washcombo-all-in-one_landing-page_In-Between-all-in-one",
    "In-Between-dimensions.jpg": "https://media.us.lg.com/transform/90f28ee4-e46a-4419-ac51-4d464a8a7122/washcombo-all-in-one_landing-page_In-Between-dimensions",
    "In-Between-installation.jpg": "https://media.us.lg.com/transform/945b43a1-0870-4a11-afb5-8dce13dbe593/washcombo-all-in-one_landing-page_In-Between-installation",
    "Tablet-installation.jpg": "https://media.us.lg.com/transform/985314a0-7113-4219-a154-9f23fce9faed/washcombo-all-in-one_landing-page_Tablet-installation",
    "Tablet-dimensions.jpg": "https://media.us.lg.com/transform/c87c38db-a3ad-4214-abc4-50db6924dde2/washcombo-all-in-one_landing-page_Tablet-dimensions",
    "Tablet-all-in-one.jpg": "https://media.us.lg.com/transform/dec22686-ff1e-4f3c-8502-45fa92bc9e27/washcombo-all-in-one_landing-page_Tablet-all-in-one",
  };

  return (
    <picture>
      <source
        media="(max-width: 575px)"
        srcSet={imageDictionary[`Mobile-${img}`]}
      />
      <source
        media="(max-width: 767px)"
        srcSet={imageDictionary[`In-Between-${img}`]}
      />
      <img
        src={imageDictionary[`Tablet-${img}`]}
        alt=""
      />
    </picture>
  );
}
