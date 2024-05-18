import React from "react";
import PropTypes from "prop-types";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./index.scss";

const AppScrollbar = (props) => {
  const { children, className, ...rest } = props;
  return (
    <SimpleBarReact className="scrollbar" {...rest}>
      {children}
    </SimpleBarReact>
  );
};

AppScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AppScrollbar;
