import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./index.scss";
import { MOTION_VARIANTS } from "_constants";

const AppAnimatePage = (props) => {
  const { children, path, noAnimation } = props;
  if (noAnimation) return children;
  return (
    <motion.div
      className="motion"
      custom={{ direction: "forward" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={MOTION_VARIANTS}
      key={path}
    >
      {children}
    </motion.div>
  );
};

AppAnimatePage.prototype = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  noAnimation: PropTypes.bool,
};

AppAnimatePage.defaultProps = {
  noAnimation: false,
};

export default AppAnimatePage;
