import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ISuccessToastProps {
  text: string;
}

function SuccessToast({ text }: ISuccessToastProps) {
  const notify = () => toast.success(text);

  notify();
  return <ToastContainer position="bottom-right" />;
}

export default SuccessToast;
