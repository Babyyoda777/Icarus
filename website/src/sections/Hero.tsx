import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { Demo } from "../components/Demo";
import { Section } from "../components/Section";
import { GradientText } from "../components/GradientText";
import Image from 'next/image'
import profilePic from '../images/render-solo.png'
// Built with Vivid (https://vivid.lol) ⚡️

const Background = () => (
  <div
    className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
    aria-hidden="true"
  >
  </div>
);

export const Hero = () => {
  return (
    <Section
      gradients
      className="items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 col md:flex-row"
    >
      <Background />
      {/* Text */}
      <div className="z-10 gap-4 text-center col md:text-left">
        <Title size="lg">
          <GradientText className="pink-blue">Introducing</GradientText>
          <br />
          Icarus
        </Title>
        <Details>
          A custom Meshtastic supported PCB based on the ESP32-S3.
        </Details>
      </div>
      <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </Section>
  );
};
