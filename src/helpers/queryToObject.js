const queryToObject = (searchString) => {
  const splitSearchString = searchString.slice(1).split('&');

  const searchObject = splitSearchString.reduce((acc, curr) => {
    const keyValueArr = curr.split('=');
    const key = keyValueArr[0];
    const value = keyValueArr[1];

    acc[key] = value.includes(',') ? value.split(',') : value;
    return acc;
  }, {});
  return searchObject;
};

export default queryToObject;
