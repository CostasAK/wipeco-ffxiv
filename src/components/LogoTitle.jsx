import { cn } from "../utils/cn";

export const LogoTitle = () => {
  return (
    <h1 className={cn("text-xl", "px-3", "max-w-fit")}>
      <a href="/" className={cn("flex", "flex-row", "items-center", "gap-4")}>
        <img alt="" src="/favicon.png" className={cn("w-10", "h-10")} />
        <span>Wipe Co.</span>
      </a>
    </h1>
  );
};
