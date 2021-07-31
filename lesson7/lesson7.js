// const energy = 100
//
// function myDailyList(energy, cb) {
//     setTimeout(() => {
//         energy -= 10;
//         if (energy <= 80) {
//             console.log('sleep again');
//             cb('error')
//         } else {
//             console.log('8am I wake up')
//             cb(null, energy)
//         }
//     }, Math.random() * 2000)
// }
//
// function run(energy, cb) {
//     setTimeout(() => {
//         energy += 20;
//         console.log('9am I`m running');
//         cb(null, energy)
//     }, Math.random() * 2000)
// }
//
// function eat(energy, cb) {
//     setTimeout(() => {
//         energy -= 20;
//         if (energy <= 10) {
//             console.log('10am I have my breakfast cooked')
//             cb(null, energy)
//
//         } else {
//             cb('no', null);
//         }
//     }, Math.random() * 2000)
// }
//
// function water(energy, cb) {
//     setTimeout(() => {
//         energy += 50;
//         if (energy > 10) {
//             console.log('11 am I go to the shower')
//             cb(null, energy);
//         } else {
//             cb('no', null)
//         }
//     }, Math.random() * 2000)
// }
//
// function study(energy, cb) {
//     setTimeout(() => {
//         energy += 50;
//         if (energy > 10) {
//             console.log('12am I`m styding in oktenweb')
//             cb(null, energy);
//         } else {
//             cb('no', null)
//         }
//     }, Math.random() * 2000)
// }
//
// function stillstudy(energy, cb) {
//     setTimeout(() => {
//         energy += 50;
//         if (energy > 10) {
//             console.log('Usually I`m styding to 8pm')
//             cb(null, energy);
//         } else {
//             cb('no', null)
//         }
//     }, Math.random() * 2000)
// }
//
// function social(energy, cb) {
//     setTimeout(() => {
//         energy -= 50;
//         console.log('9pm chek my insta & telegram')
//         cb(null, energy);
//     }, Math.random() * 2000)
// }
//
// function friends(energy, cb) {
//     setTimeout(() => {
//         energy -= 50;
//         console.log('10pm Hang out with friends')
//         cb(null, energy);
//     }, Math.random() * 2000)
// }
//
// function bed(energy, cb) {
//     setTimeout(() => {
//         energy += 20;
//         console.log('12pm go to bed')
//         cb(null, energy)
//     }, Math.random() * 2000)
// }
//
// function sleep(energy, cb) {
//     setTimeout(() => {
//         energy += 20;
//         console.log('12:15 I fall asleep')
//         cb(null, energy)
//     }, Math.random() * 2000)
// }
// myDailyList(100, (data) => {
//     console.log(data);
//     run(data,(data) => {
//         console.log(data);
//         eat(data, (data) => {
//             console.log(data);
//             water(data, (data) => {
//                 console.log(data);
//
//                 study(data, (data) => {
//                     console.log(data);
//                     stillstudy(data, (data) => {
//                         console.log(data);
//                         social(data, (data) => {
//                             console.log(data);
//                             friends(data,(data) => {
//                                 console.log(data);
//                                 bed(data, (data) => {
//                                     console.log(data);
//                                     sleep(data,(data) => {
//                                         console.log(data);
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//
//             })
//         })
//     })
// })
// // ________________________________Promise___________________________________________________________________________________________________________________________________________________
// const wakeUp = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en -= 200
//     if (en <= 0) {
//         reject('error')
//     }
//     console.log('8am I wake up');
//     resolve(en)
// }, Math.random() * 2000))
//
// const run1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en += 100
//     console.log('9am I`m running');
//     resolve(en)
// }, Math.random() * 2000))
//
// const eat1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en -= 50
//     if (en <= 0) {
//         reject('eat')
//     }
//     console.log('10am I have my breakfast cooked');
//     resolve(en)
// }, Math.random() * 2000))
//
// const shower = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en += 500
//     if (en <= 0) {
//         reject('error')
//     }
//     console.log('11 am I go to the shower');
//     resolve(en)
// }, Math.random() * 2000))
//
// const studying = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en -= 1000
//     if (en <= 0) {
//         reject('error')
//     }
//     console.log('12am I`m styding in oktenweb');
//     resolve(en)
// }, Math.random() * 2000))
//
// const chek = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en += 100
//     if (en <= 0) {
//         reject('error')
//     }else {
//     console.log('9pm chek my insta & telegram');
//     resolve(en)
//     }
// }, Math.random() * 2000))
//
// const friends1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en += 400
//     if (en <= 0) {
//         reject('error')
//     }else{
//     console.log('10pm Hang out with friends');
//     resolve(en)
//     }
// }, Math.random() * 2000))
//
// const bed1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
//     en += 150
//     if (en <= 0) {
//         reject('error')
//     } else{
//     console.log('12pm go to bed');
//     resolve(en)
//     }
// }, Math.random() * 2000))
// // _________________________________________________________________
// wakeUp(1000)
//     .then(value => {
//         console.log(value);
//         return run1(value)
//     }).then(value => {
//         console.log(value);
//         return eat1(value)
//     })
//     .then(value => {
//         console.log(value);
//         return shower(value)
//     }).then(value => {
//     console.log(value);
//     return studying(value)
// }).then(value => {
//     console.log(value);
//     return chek(value)
// }).then(value => {
//     console.log(value);
//     return friends1(value)
// }).then(value => {
//     console.log(value);
//     return bed1(value)})
//
//     .then(value => console.log(value))
//     .catch(reason => console.log(reason))
// ______________________________________________________-
const wakeUp = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en -= 200
    if (en <= 0) {
        reject('error')
    }
    console.log('8am I wake up');
    resolve(en)
}, Math.random() * 2000))

const run1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en += 100
    console.log('9am I`m running');
    resolve(en)
}, Math.random() * 2000))

const eat1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en -= 50
    if (en <= 0) {
        reject('eat')
    }
    console.log('10am I have my breakfast cooked');
    resolve(en)
}, Math.random() * 2000))
const shower = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en += 500
    if (en <= 0) {
        reject('error')
    }
    console.log('11 am I go to the shower');
    resolve(en)
}, Math.random() * 2000))

const studying = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en -= 1000
    if (en <= 0) {
        reject('error')
    }
    console.log('12am I`m styding in oktenweb');
    resolve(en)
}, Math.random() * 2000))

const chek = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en += 100
    if (en <= 0) {
        reject('error')
    }else {
    console.log('9pm chek my insta & telegram');
    resolve(en)
    }
}, Math.random() * 2000))

const friends1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en += 400
    if (en <= 0) {
        reject('error')
    }else{
    console.log('10pm Hang out with friends');
    resolve(en)
    }
}, Math.random() * 2000))

const bed1 = (en) => new Promise((resolve, reject) => setTimeout(() => {
    en += 150
    if (en <= 0) {
        reject('error')
    } else{
    console.log('12pm go to bed');
    resolve(en)
    }
}, Math.random() * 2000))
//
// async function myDay1(){
// const day = await wakeUp(1000);
//     console.log(day)
//     await run1();
//     console.log(run1)
//     await eat1()
//     console.log(eat1)
//     await shower()
//     console.log(shower);
//     await studying()
//     console.log(studying);
//     await chek()
//     console.log(chek)
//     await friends1()
//     console.log(friends1)
//     await bed1()
//     console.log(bed1);
// }

const start = async ()=>{
    console.log(await wakeUp());
    console.log(await run1());
    console.log(await eat1());
    console.log(await shower());
    console.log(await studying());
    console.log(await chek());
    console.log(await friends1());
    console.log(await bed1());
}
start()






































