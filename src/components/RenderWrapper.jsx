import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

export const RenderWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet
        defaultTitle={import.meta.env.VITE_APP_NAME}
        titleTemplate={`%s - ${import.meta.env.VITE_APP_NAME}`}
      />
      {children}
    </HelmetProvider>
  </QueryClientProvider>
);

RenderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
