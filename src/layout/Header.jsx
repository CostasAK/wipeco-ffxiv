import clsx from "clsx";

export const Header = () => {
  return (
    <header
      className={clsx("py-12", "px-8", "bg-cyan", "text-white", "text-center")}
    >
      <h1 className={clsx("font-serif", "text-5xl")}>{"Wipe Co."}</h1>
    </header>
  );
};
