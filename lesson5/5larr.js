// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//
//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
for (const user of users){
    let userDiv =document.createElement('div');
    userDiv.innerText=`${user.address}`;
    console.log(user.address)
}
let location123 = [{city: "Lviv", country: "Ukraine", street: "Shevchenko", houseNumber: 1},
{city: "New York", country: "USA", street: "East str", houseNumber: 21},
{city: "Budapest", country: "Hungary", street: "Kuraku", houseNumber: 78},
{city: "Prague", country: "Czech", street: "Paster", houseNumber: 56},
{city: "Istanbul", country: "Turkey", street: "Mikar", houseNumber: 39},
{city: "Rio", country: "Brasil", street: "Ronaldi", houseNumber: 5},
{city: "Montreal", country: "Canada", street: "Acusto", houseNumber: 90},
{city: "Quebeck", country: "Canada", street: "Binaro", houseNumber: 33},
{city: "Moscow", country: "Russia", street: "Gogolia", houseNumber: 1},
{city: "Portland", country: "USA", street: "Forest str", houseNumber: 4},
{city: "Cairo", country: "Egypt", street: "Seashore", houseNumber: 45}
];

for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerText = `${user.name} ${user.age} ${user.status} ${user.address.country} ${user.address.city}  ${user.address.street}
     ${user.address.houseNumber}`;
    console.log(userDiv);
}

let title=document.createElement('h2');
{title.innerText= `${user.name} - ${user.age}`;
//     userDiv.append('title')!!!!!!!!!!!!!!!!!!!!!
    console.log(title)
}


let info=document.createElement('h3');
{info.innerText= `${user.status}`;
    // userDiv.append('info')!!!!!!!!!!!!!!!!!!!!!
    console.log(info)
}

// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
let location98= document.createElement('p');
{location98.innerText=` ${user.address.country} `;
    console.log(location98)}

let location9= document.createElement('p');
{location9.innerText=`  ${user.address.city} `;
    console.log(location9)}

let location8= document.createElement('p');
{location8.innerText=`${user.address.street}`;
    console.log(location8)}

let location980= document.createElement('p');
{location980.innerText=`${user.address.houseNumber}`;
    console.log(location980)}







