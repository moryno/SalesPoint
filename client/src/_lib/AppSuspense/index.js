import { Suspense } from "react";
import PropTypes from "prop-types";

const AppSuspense = (props) => {
  const { children } = props;
  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>;
};
AppSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppSuspense;
