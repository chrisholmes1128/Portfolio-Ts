export const isCurrentDeviceMobile = () => {
  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    return true;
  } else {
    // false for not mobile device
    return false;
  }
};
