import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { TypewriterEffect } from "./typewriter-effect";
const Banner = () => {
  const background: BannerLayer = {
    image:
      "https://i.pinimg.com/originals/eb/50/87/eb50875a68b04b0480fa929af2c7547c.gif",

    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <TypewriterEffect
          words={[
            {
              text: "Hello",
            },
            {
              text: "and",
            },
            {
              text: "thank",
            },
            {
              text: "for",
            },
            {
              text: "coming.",
            },
          ]}
        />
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900"
    />
  );
};

export default Banner;
