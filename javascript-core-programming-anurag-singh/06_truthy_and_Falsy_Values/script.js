// Falsy Values

// empty string
console.log(Boolean(""));

// zero
console.log(Boolean(0));
// console.log(Boolean(-0));

// undefined
console.log(Boolean(undefined));

// null
console.log(Boolean(null));

// NaN
console.log(Boolean(NaN));

// Truthy Values --> everything else
console.log(Boolean(" "));
console.log(Boolean(0.00001));
console.log(Boolean(Infinity));
