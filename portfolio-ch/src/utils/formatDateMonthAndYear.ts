export const formatDateMonthAndYear = (date: string) => {
  const mmddyyyy = new Date(date)?.toLocaleDateString();
  const splitDate = mmddyyyy.split("/");
  const mmyyyy = `${splitDate?.[0]}/${splitDate?.[2]}`;
  return mmyyyy;
};
