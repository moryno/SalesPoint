import { message as messageAlert, notification } from "antd";
// import { isDesktop as isDesktopDevice } from "react-device-detect";
import { getTitleCaseSentence } from "_helpers";

export const notify = ({
  message,
  description = "",
  error = false,
  success = false,
  info = false,
  warning = false,
  loading = false,
  configs = { duration: 4.5 },
}) => {
  const alertTypes = { error, success, info, warning, loading };
  const selectedAlertType = Object.keys(alertTypes).find(
    (key) => alertTypes[key]
  );
  const alertOptions = {
    message: message || `${getTitleCaseSentence(selectedAlertType)}`,
    description,
    content: description,
    ...configs,
  };
  //   const alertType = isDesktopDevice ? notification : messageAlert;
  const alertType = notification;

  alertType[selectedAlertType](alertOptions);
};
