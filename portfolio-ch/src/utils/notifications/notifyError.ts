import { toast } from "react-toastify";

const notifyError = (msg: string) =>
  toast.error(msg, { autoClose: 3000, theme: "colored" });

export default notifyError;
