import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Main } from "../layout/Main";

export default function Root({ children }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
        {children}
      </Main>
      <Footer />
    </>
  );
}

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
