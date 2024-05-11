import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import PropTypes from "prop-types";
import { IoExpand } from "react-icons/io5";
import { Breadcrumb } from "antd";
// import { GoHomeFill } from "react-icons/go";
import { HOME_ROUTE } from "_constants";
import "./index.scss";

const AppBreadCrumbs = (props) => {
  const { urlToNameMap, onClickFullScreen, showFullScreen, className, items } =
    props;
  const { pathname } = useLocation();

  const breadCrumbItems = useMemo(() => {
    if (items)
      return items.map((item) => ({
        key: item,
        title: item,
      }));
    const pathSnippets = pathname.split("/").filter((i) => i);
    let extraBreadcrumbItems = [];
    pathSnippets.forEach((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      if (urlToNameMap[url]) {
        extraBreadcrumbItems.push({
          key: url,
          title: <Link to={url}>{urlToNameMap[url]}</Link>,
        });
      }
    });
    return [
      {
        title: (
          <Link to={HOME_ROUTE}>
            <div className="breadcrumbsHomeIconCOntainer">
              {/* <GoHomeFill size={18} /> */}
              SalesPoint
            </div>
          </Link>
        ),
        key: "home",
      },
    ].concat(extraBreadcrumbItems);
  }, [items, pathname, urlToNameMap]);

  return (
    <div className="breadcrumbContainer">
      <Breadcrumb
        separator={<MdArrowForwardIos size={10} />}
        items={breadCrumbItems}
      />
      {showFullScreen && (
        <span className="full-screen" onClick={onClickFullScreen}>
          <IoExpand size={18} /> Fullscreen
        </span>
      )}
    </div>
  );
};

AppBreadCrumbs.prototype = {
  urlToNameMap: PropTypes.object,
  showFullScreen: PropTypes.bool,
  onClickFullScreen: PropTypes.func,
  items: PropTypes.array,
  className: PropTypes.string,
};
AppBreadCrumbs.defaultProps = {
  urlToNameMap: null,
  showFullScreen: false,
  onClickFullScreen: () => null,
  items: null,
  className: "",
};
export default AppBreadCrumbs;
