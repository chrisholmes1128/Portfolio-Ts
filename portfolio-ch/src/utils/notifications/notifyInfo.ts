import { toast } from "react-toastify";

const notifyInfo = (msg: string) =>
  toast.info(msg, { autoClose: 10000, theme: "colored" });

export default notifyInfo;
