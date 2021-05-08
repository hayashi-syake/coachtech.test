const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (value, index, array) {
  return array.indexOf(value) === index;
  // console.log(array.indexOf(value) + ":" + index);
});
console.log(result);

const leapYear = [2020, 2021];
if (leapYear / 4 == 0 || (leapYear / 100 && leapYear / 400 == 0)) {
  console.log(`${leapYear}はうるう年です`);
} else {
  console.log();
}
