import clsx from "clsx";
import { LogoTitle } from "../components/LogoTitle";

export const Header = () => {
  return (
    <header className={clsx("p-2", "bg-jet", "text-alto-50", "drop-shadow")}>
      <LogoTitle />
    </header>
  );
};
