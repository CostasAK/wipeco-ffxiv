import PropTypes from "prop-types";

export const Main = ({ children }) => {
  return <main className="w-full max-w-xl py-12 px-4 mx-auto">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
