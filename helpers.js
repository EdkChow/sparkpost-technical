const persons = [];

const containsName = (arr, name) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === name) return true;
  };
  return false;
};

const updateAge = (arr, name, age) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === name) {
      arr[i].age = age;
    };
  };
};

const findName = (arr, name) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === name) return arr[i];
  };
};

module.exports = {
  containsName,
  updateAge,
  findName,
  persons,
};
