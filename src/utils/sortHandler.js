// eslint-disable-next-line arrow-body-style
export const sortHandler = (nameOfProperty, arrayOfObjects) => {
  return arrayOfObjects.sort((a, b) => b[nameOfProperty] - a[nameOfProperty]);
};
