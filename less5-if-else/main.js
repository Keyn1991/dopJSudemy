"use strict";

//
// if (4 == 4) {
//     console.log('Ok!');
//
// } else {
//     console.log('Error');
// }
//
// const num = 50;
//
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }
//
// (num === 50) ? console.log('Ok!') : console.log('Error');


const numOne = 100;

switch (numOne) {
    case 49:
        console.log('Неверно');
        break;
    case 75:
        console.log('Неверно');
        break;
    case 100:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}