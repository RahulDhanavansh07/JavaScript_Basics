// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("012" >1 );

//  console.log(null > 0);
//  console.log(null == 0);
//  console.log(null === 0);
//  console.log(null>=0);

//   the reason is that an equality check == and comparision
//   > < >= =< work diffrently
//   Comparision convert null to a number treating it as a 0
//   that's why 
//   null>=0 is true
//   and
//   null > 0 is false


// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined === 0);
// console.log(undefined >=0);

//equality check
console.log ("2"== 2);
//  value is true bcz it only check values
// strict check
console.log("2"===2);
// false bcz it check value + datatype
