import clsx from "clsx";
import logoSrc from "../../public/favicon.png";

export const FullViewportSpinner = () => {
  return <img alt="Loading..." src={logoSrc} className={clsx("m-10")} />;
};
