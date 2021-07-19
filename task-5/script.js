
//Task-5

//5. ele bir funksiya yazin ki object oturulende true, array oturulende false versin(funksiyani cagirarken arqument olaraq otureceyiniz object true verecek, array ise false)
// var b = [];
// var c = {};


// const checkelem = (a) => {
//     if (typeof (a) === typeof ({})) {
//         console.log('True');
//     }
//     else if(typeof (a) === typeof Array.isArray) {
//         console.log('False');
//     }
// };

// checkelem([]);


const checkelem = (a) => {
    if (Array.isArray (a)){
        console.log('false');
    }
    else if (typeof a === 'object'){
        console.log('True');
    }
}

// let a = {name:'Ofeliya',surname:'Abdullayeva'};
let a = [5,52,75,85]
checkelem(a)