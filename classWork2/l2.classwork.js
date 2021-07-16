// let numbers = [21, -666, 1000000000, 0, 8786];
// console.log(numbers);
//
// let fruits = ['яблуко', 'банан', 'полуниця', 'ківі', 'виноград'];
// console.log(fruits);
//
// let mix = ['яблуко', 45678 , 'полуниця', true , false ];
// console.log(mix);
//
// let empty =[];
// // for (ler empty of empty)
// empty = true;
//
// let skills = ['java', 'dfghjk', 'dfghjk', 'ghjk']
// for (let skill of skills)
//     console.log(skill);
//
//
// arr= [];
// console.log(arr)
// arr= 3
//
// let users= [
//     {name: 'Alya', age: 35, status: true, city: 'Kharkiv'} ,
//     {name: 'Anya', age: 18, status: true, city: 'Lviv'},
//     {name: 'Olya', age: 28, status:  false, city: 'Kyiv'},
//     {name: 'Max', age: 23, status: true, city: 'Kherson'},
//     {name: 'Lana', age: 25, status: true, city: 'Odessa'},
//     {name: 'Roma', age: 19, status: false, city: 'Lviv'} ,
//     {name: 'Bodya', age: 31, status: true, city: 'Kyiv'} ,
//     {name: 'Anya', age: 19, status: false, city: 'Odessa'},
//     {name: 'Bodya', age: 31, status: true, city: 'Kyiv'}
// ];
//
// document.write('<div class="target">');
// for (let user of users) {
//     document.write(`<div>${user.name} - ${user.age} - ${user.city} - ${user.status} </div>`);
// }
// document.write ('</div>');
// console.log(users)
//
// users= [
//     {name: 'Alya', age: 35, status: true, city: 'Kharkiv'} ,
//     {name: 'Anya', age: 18, status: true, city: 'Lviv'},
//     {name: 'Olya', age: 28, status:  false, city: 'Kyiv'},
//     {name: 'Max', age: 23, status: true, city: 'Kherson'},
//     {name: 'Lana', age: 25, status: true, city: 'Odessa'},
//     {name: 'Roma', age: 19, status: false, city: 'Lviv'} ,
//     {name: 'Bodya', age: 31, status: true, city: 'Kyiv'} ,
//     {name: 'Gaya', age: 19, status: false, city: 'Odessa'},
//     {name: 'Bodya', age: 31, status: true, city: 'Kyiv'}
// ];
// for (let i= 2; i<users.length -1;i++) {
//     document.write(`i= ${i}<div>${user.name} - ${user.age} - ${user.city}  </div>`);
// }
//
//
// let i = 0;
// while (i<users.length){
//     console.log(users[i]);
//     i++;
// }
//
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let array = ['afghmwertyhj', '1wsdfgyhuikkkkkkkkkkkkkk', 'qwertyuiolmn', 'jsxbhjbcb', 'ahwashad', 'djwijdiwdjaa', 'oswjdowjdag',
//     'owsojddjaaa', 'djwdidjwidadaac', 'adwjsdhxaqjoddja', 'wjidjdiqhdyid', 'jwjqjdidhydu', 'wshdxuiwhdh', 'wihcisdhxw', 'iwjiwsjqi',
//     'wihishwshd', 'skdksaj  aoqwkq', 'ksqoskqdojqsojs12osdkoksa', 'slxpkspqdskpkqs', 'jwasqskqojqwjwjqj'];
// document.write('<div>');
// array = 0;
// while (i < array.length) {
//     document.write(`
//         <h1>${array[i]}. index number ${i}</h1>`);
//     i++;
// }
// document.write('</div>');
// console.log(array)
//
// // Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array1 = [1,666, 324, 5432, 543, 546, 987, 1, 54, 21,23];
// for (let i = 0; i < array1.length; i++)
// console.log(array1 [i]);
//
// // // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array2= ['afghmwertyhj', '1wsdfgyhuikkkkkkkkkkkkkk', 'qwertyuiolmn', 'jsxbhjbcb', 'ahwashad', 'djwijdiwdjaa', 'oswjdowjdag',
//     'owsojddjaaa', 'djwdidjwidadaac', 'adwjsdhxaqjoddja', 'wjidjdiqhdyid', 'jwjqjdidhydu', 'wshdxuiwhdh', 'wihcisdhxw', 'iwjiwsjqi',
//     'wihishwshd']
// for (let i= 0;i< array2.length;i++)
//     console.log(array2[i])
//
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array3= [23, true, 'cat', false, 3456, 'dog', 123, 777, 'Harry Potter', 456 ]
// for (let i=0; i< array3.length; i++);
//     console.log(array3[i])
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array4= [23, true, 'cat', false, 3456, 'dog', true, 777, 'Harry Potter', 456 ]
for (let i=0; i<array4.length;i++)
    if (typeof array4[i] ==="boolean")
    console.log(array4[i]);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let array5= [23, true, 'cat', false, 3456, 'dog', true, 777, 'Harry Potter', 456 ]
for (let i=0; i<array5.length;i++)
    if (typeof array5[i] ==="number")
        console.log(array5[i]);

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let array6= [23, true, 'cat', false, 3456, 'dog', true, 777, 'Harry Potter', 456 ]
for (let i=0; i<array6.length;i++)
    if (typeof array6[i] ==="string")
        console.log(array6[i]);

let array7 = []
array7 [0] = '21';
array7 [1] = 9000;
array7 [2] = true;
array7 [3] = 1;
array7 [4] = false;
array7 [5] = 'like';
array7 [6] = 'dog';
array7 [7] = true;
array7 [8] = 21456789;
array7 [9] = 'cat';
console.log(array7);

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 let array8 = [];
 for (let i = 0; i < 10; i++) {
     console.log([i])
     document.write (`${[i]}`)
 }

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let array9 = [];
for (let i = 0; i < 100; i++) {
    console.log([i])
    document.write (`${[i]}`)
}

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let array10 = [];
for (let i = 0; i < 100; i = i+ 2) {
    console.log(`[i]`)
    document.write (`${[i]}`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
let array11= [];
for (let i=0; i<100; i=i+2) {
    console.log(`[i]`)
document.write (`${[i]}`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let array12= [];
for (let i=0; i<100; i=i+3) {
    console.log(`[i]`)
    document.write(`${[i]}`)
}



// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//

let usersWithCities = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1,
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },

    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {
            user_id: 2,
            country: 'Poland',
            city: 'Krakow'
        }
    },
    {   id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {
           user_id: 3,
           country: 'USA',
           city: 'Portland'
        }
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {
            user_id: 4,
            country: 'USA',
            city: 'Miami'
        }
    }

 ];
console.log(usersWithCities)





























