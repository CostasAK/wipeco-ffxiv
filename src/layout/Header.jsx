import { LogoTitle } from "../components/LogoTitle";
import { cn } from "../utils/cn";

export const Header = () => {
  return (
    <header className={cn("p-2", "bg-jet", "text-alto-50", "drop-shadow")}>
      <LogoTitle />
    </header>
  );
};
