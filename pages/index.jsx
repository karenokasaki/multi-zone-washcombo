import Hero from "../components/Hero/Hero";
import StickyNav from "../components/StickyNav/StickyNav";
import Ventless from "../components/Ventless/Ventless";
import PowerOfOne from "../components/PowerOfOne/PowerOfOne";
import UnderTheStairs from "../components/UnderTheStairs/UnderTheStairs";
import ThinQ from "../components/ThinQ/ThinQ";
import Accordion from "../components/Accordion/Accordion";
import MegaCapacity from "../components/MegaCapacity/MegaCapacity";
import Overview from "../components/Overview/Overview";
import Video from "../components/Video/Video";
import ScrollVideo from "../components/ScrollVideo/ScrollVideo";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  const [showNav, setShowNav] = useState(false);
  const [disableLenis, setDisableLenis] = useState(false);

  return (
    <ReactLenis root>
      <ParallaxProvider>
        <div
          className="washcombo-wrapper"
          data-lenis-prevent={disableLenis || null}
        >
          <StickyNav showNav={showNav} setDisableLenis={setDisableLenis} />

          <ComponentWrapper>
            <Hero setShowNav={setShowNav} />
          </ComponentWrapper>

          <ComponentWrapper>
            <PowerOfOne />
          </ComponentWrapper>

          <ComponentWrapper>
            <Overview />
          </ComponentWrapper>

          <ComponentWrapper>
            <MegaCapacity />
          </ComponentWrapper>

          <ComponentWrapper>
            <Accordion />
          </ComponentWrapper>

          <ComponentWrapper>
            <Video />
          </ComponentWrapper>

          <ComponentWrapper>
            <ScrollVideo />
          </ComponentWrapper>

          <ComponentWrapper>
            <ThinQ />
          </ComponentWrapper>

          <ComponentWrapper>
            <UnderTheStairs />
          </ComponentWrapper>

          <ComponentWrapper>
            <Ventless setDisableLenis={setDisableLenis} />
          </ComponentWrapper>
        </div>
      </ParallaxProvider>
    </ReactLenis>
  );
};

const ComponentWrapper = ({ children }) => {
  return (
    <div style={{ maxWidth: "1600px", margin: "0 auto", width: "100%" }}>
      {children}
    </div>
  );
};

export default Home;
