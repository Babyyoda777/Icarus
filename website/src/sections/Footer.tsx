import Image from "next/image";
import { LinkButton } from "../components/LinkButton";

// Built with Vivid (https://vivid.lol) ⚡️

export const Footer = () => {
  return (
    <footer className="bg-extra-strong">
      <div className="items-center justify-between px-10 py-4 mx-auto sm:px-6 row max-w-7xl">
        <div className="items-center gap-4 row">
          <div className="text-sm text-light">&copy; Muhammad Shah 2024</div>
        </div>
        <LinkButton
          href="https://github.com/babyyoda777/Icarus"
          aria-label="GitHuB"
        >
          Check out GitHub!
        </LinkButton>
      </div>
    </footer>
  );
};
