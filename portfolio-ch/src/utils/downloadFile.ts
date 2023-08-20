const downloadFile = (filePath: string) => {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf("/") + 1);
  link.click();
};

export default downloadFile;