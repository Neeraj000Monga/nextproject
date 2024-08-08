import React from "react";
import AirbnbLogo from "../assets/AirbnbLogo.svg";
import SpotifyLogo from "../assets/SpotifyLogo.svg";
import GoogleLogo from "../assets/GoogleLogo.svg";
import SlackLogo from "../assets/SlackLogo.svg";
import SplineLogo from "../assets/SplineLogo.svg";
import PaypalLogo from "../assets/PaypalLogo.svg";
import Image from "next/image";

const logos = [
  { src: SpotifyLogo, alt: "Spotify" },
  { src: AirbnbLogo, alt: "Airbnb" },
  { src: GoogleLogo, alt: "Google" },
  { src: SlackLogo, alt: "Slack" },
  { src: SplineLogo, alt: "Spline" },
  { src: PaypalLogo, alt: "Paypal" },
];

const repeatedLogos = [
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
];

const BrandingSlide = ({ animationClass }) => {
  return (
    <div className="overflow-hidden h-[350px] flex flex-col justify-center w-full">
      <div
        className="z-10 top-8 relative right-5 w-[120%] bg-white overflow-hidden"
        style={{
          transform: "rotateZ(-14.4deg)",
        }}
      >
        <div className={`flex gap-7 w-full relative animate-marquee-left`}>
          {repeatedLogos.map((logo, index) => (
            <Image
              className="w-16 h-14"
              key={index}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>

      <div
        className="relative w-[80%] right-12 overflow-hidden bg-white"
        style={{
          transform: "rotateZ(19deg)",
        }}
      >
        <div
          className={`flex gap-7 w-full bottom-16 relative top-0 animate-marquee-right`}
        >
          {repeatedLogos.map((logo, index) => (
            <Image
              className="w-16 h-14"
              key={index}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandingSlide;
