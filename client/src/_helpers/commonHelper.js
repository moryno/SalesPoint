export const formatAndValidatePhoneNumber = (phoneNumber, countryCode) => {
  if (!phoneNumber) return "";
  const phoneRegex = new RegExp(
    `^(?:${countryCode}|\\+${countryCode}|0)[17]\\d{8}$`
  );
  const standardFormat = `${countryCode}$1$2`;
  const formattedPhone = phoneNumber.replace(
    new RegExp(`^(?:${countryCode}|\\+${countryCode}|0)([17])(\\d{7,8})$`),
    standardFormat
  );
  const isValidPhone = phoneRegex.test(formattedPhone);
  return isValidPhone ? formattedPhone : null;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getTitleCaseSentence = (str) => {
  if (!str) {
    return "";
  }
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};

export const hardRefreshAndEmptyCache = async () => {
  if ("caches" in window) {
    try {
      const keys = await caches.keys();
      keys.forEach((key) => {
        // Delete all the cache files
        caches.delete(key);
      });
    } catch (error) {}
  }
  window.location.reload(true);
};

export const isLastPage = (meta) => {
  const { current_page, limit, total } = meta || {};
  return (
    parseInt(current_page) === Math.ceil(parseInt(total) / parseInt(limit))
  );
};

export const getKeyByValue = (obj, value) => {
  return Object.keys(obj).find(
    (key) => JSON.stringify(obj[key]) === JSON.stringify(value)
  );
};

export const getFormattedCurrencyNumber = (value) => {
  return new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const preventInValidNumberCharsOnKeyDown = (evt) => {
  return ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault();
};

export const getLocationOrigin = () => {
  return window.location.origin.replace(/^http(s?):\/\//i, "");
};

export const getUpperCaseSentence = (sentence = "") => {
  return (sentence || "").toUpperCase();
};

export const getSearchParamsFromURL = (url) => {
  let urlParams = {};
  new URL(url).searchParams.forEach((value, key) => {
    urlParams[key] = value;
  });
  return urlParams;
};

export const getPhoneNumberDisplay = (value) => {
  return value.replace(/(\d{3})(\d{3})(\d{3})/, "+$1 0$2 $3 ");
};

export const callPhoneNumber = (phone) => {
  return window.open(`tel:+${phone}`);
};
export const replaceExternalText = (text = "") => {
  if (typeof text !== "string") return "";
  let newText = "";
  const textToRemove = (
    process.env.REACT_APP_EXTERNAL_TEXT || ""
  ).toLowerCase();

  if (text.toLowerCase().includes(textToRemove)) {
    text.split(" ").forEach((el, index) => {
      newText += index !== 0 ? " " : "";
      const elementToCheck = el.toLowerCase();
      if (
        elementToCheck === textToRemove ||
        elementToCheck.includes(textToRemove)
      ) {
        newText += "Pepeta";
      } else {
        newText += el;
      }
    });
  }
  return newText || text;
};
