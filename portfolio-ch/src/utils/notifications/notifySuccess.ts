import { toast } from "react-toastify";

const notifySuccess = (msg: string) =>
  toast.success(msg, { autoClose: 10000, theme: "colored" });

export default notifySuccess;
