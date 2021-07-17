
//Task-5

//5. ele bir funksiya yazin ki object oturulende true, array oturulende false versin(funksiyani cagirarken arqument olaraq otureceyiniz object true verecek, array ise false)
control(25)
function control(a) {
    if (typeof a == Object) {
        console.log('true');
    }
    else if (typeof a == Array) {
        console.log('false');
    }

}
// console.log(control({age:25}));
console.log(control(typeof[25, 35, 45, 55]));