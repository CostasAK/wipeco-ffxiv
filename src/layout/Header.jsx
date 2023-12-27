import clsx from "clsx";

export const Header = () => {
  return (
    <header
      className={clsx(
        "py-12",
        "px-8",
        "bg-sandal",
        "text-alto-50",
        "text-center",
        "font-heading",
      )}
    >
      <h1 className={clsx("text-5xl", "font-black")}>{"Wipe Co."}</h1>
    </header>
  );
};
