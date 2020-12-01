const persons = [];

// returns true if array contains the name, otherwise false
const containsName = (arr, name) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === name) return true;
  };
  return false;
};

// updates the age in the array
const updateAge = (arr, name, age) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === name) {
      arr[i].age = age;
    };
  };
};

// returns the payload from the array
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
