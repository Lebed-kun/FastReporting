export const debounce = (callback: Function) => {
  return new Promise((resolve) => {
    const result = callback();
    resolve(result);
  });
};
