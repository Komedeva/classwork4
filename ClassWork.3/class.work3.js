// - створити функцію яка приймає масив та виводить його
// let array = [21, 3, 43, 9];
//
// function invoke() {
//
//     for (const arr of array) {
//         console.log(arr);
//
//     }
// }
// console.log(array);


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minimum(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//         return a;}
//     else if (b < c && b < a) {
//         console.log(b);
//         return b;}
//     else {
//         console.log(c);
//         return c;
//     }
// }
// console.log(minimum(4, 1, 4))
//
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maximum(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return a;
//     } else if (b > c && b > a) {
//         console.log(b);
//         return b;
//     } else {
//         console.log(c);
//         return c;
//     }
// }
// console.log(maximum(1, 3, 6));
//
// // - створити функцію яка повертає найбільше число з масиву
// function max(array23) {
//     let max = array23[0];
//     for (const maxItem of array23) {
//         if (maxItem > max) max = maxItem;}
//     return max;
// }
// let maxReturn = max([1, 3, 5, 6, 7, 34]);
// console.log(maxReturn);
//
// // - створити функцію яка повертає найменьше число з масиву
// function min(array1) {
//     let min = array1[0];
//     for (const minItem of array1) {
//         if (minItem < min) min = minItem;
//     }
//     return min;}
//
// let minReturn = min([1, 3, 5, 6, 7, 34]);
// console.log(minReturn);
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array2 = [1, 2, 10];
// let i = 0;
//
// function sum(array2) {
//     for (const arrayElement of array2) {
//         i += arrayElement;}
//     return i;}
// console.log(sum(array2));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
//
//
// - Дано масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дано масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дано масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дано масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
//
// - Дано масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дано масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
function createDiv(header, text) {
    document.write(
        `<div>
           <h1>${header}</h1>
           <p>${text}</p>
        </div>`
    );
}
createDiv('hello okten', 'jxsixjaiqxdjiax')
createDiv('hello', 'dhxuswhxd8aqij')

function increment (a) {
    ++a;
    console.log(a);
}
let x=0;
increment (x);
console.log(x);

let xRef = {z:0};
function increment2 (foo){
    foo.z++;
    console.log(foo);
}
increment2(xRef);
console.log(xRef);































