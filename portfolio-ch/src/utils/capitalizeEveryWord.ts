const capitalizeEveryWord = (str: string): string =>
  str.toLowerCase().replace(/\b[a-z]/g, (char) => char.toUpperCase());

export default capitalizeEveryWord;
