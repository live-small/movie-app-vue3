export const isAllEnglish = (value) => {
  const englishReg = /[a-zA-Z]/g;
  return englishReg.test(value);
};
