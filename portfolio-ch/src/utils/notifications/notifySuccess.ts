import { toast } from "react-toastify";

const notifySuccess = (msg: string) =>
  toast.success(msg, { autoClose: 3000, theme: "colored" });

export default notifySuccess;
