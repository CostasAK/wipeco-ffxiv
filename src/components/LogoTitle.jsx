import clsx from "clsx";
import logoSrc from "../../public/favicon.png";

export const LogoTitle = () => {
  return (
    <h1 className={clsx("text-xl", "px-3", "max-w-fit")}>
      <a href="/" className={clsx("flex", "flex-row", "items-center", "gap-4")}>
        <img alt="" src={logoSrc} className={clsx("w-10", "h-10")} />
        <span>Wipe Co.</span>
      </a>
    </h1>
  );
};
