import { toast } from "react-toastify";

const notifyError = (msg: string) =>
  toast.error(msg, { autoClose: 10000, theme: "colored" });

export default notifyError;
