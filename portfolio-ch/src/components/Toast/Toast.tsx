import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";
import { Box } from "@mui/material";

function Toast() {
  const isMobile = isCurrentDeviceMobile();
  return (
    <ToastContainer
      autoClose={5000}
      position={isMobile ? "top-center" : "bottom-right"}
      draggable={isMobile}
    />
  );
}

export default Toast;
