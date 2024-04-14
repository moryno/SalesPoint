import axios from "axios";

export const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "salespoint");

  try {
    const res = await axios.post(process.env.REACT_APP_UPLOAD_URL, data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};
