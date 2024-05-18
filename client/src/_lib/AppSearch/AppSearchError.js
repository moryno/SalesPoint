import React from "react";
import { Typography } from "antd";
import { ReactComponent as NotFoundSVG } from "_assets/images/lib/not-found.svg";
import PropTypes from "prop-types";
import "./index.scss";

const AppSearchError = (props) => {
  const { isSearchValueValid, isResultsEmpty, loading } = props;

  return (
    <>
      {isSearchValueValid && isResultsEmpty && !loading && (
        <div className="appHeaderSearchError">
          <NotFoundSVG />
          <Title level={4}>Oh No!</Title>
          <Text type="secondary">
            Seems we could not find any item
            <br />
            that match your search keyword.
          </Text>
          <Text type="secondary">Try another name.</Text>
        </div>
      )}
      {!isSearchValueValid && (
        <div className="appHeaderSearchError">
          <Text type="secondary">Search requires at least 3 characters.</Text>
        </div>
      )}
    </>
  );
};

const { Title, Text } = Typography;

AppSearchError.protoTypes = {
  isSearchValueValid: PropTypes.bool.isRequired,
  isResultsEmpty: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AppSearchError;
