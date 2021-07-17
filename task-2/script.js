// 2. Ededlerin cemini ve hasilini qaytaran funksiya yazin
//================  CEM  =================//
let arr = [5,2,7,4,8,12];

let cem = 0

function sum(){
    for(i=0;i<arr.length;i++){
       cem = cem + arr[i]
    }  
    return cem
}

console.log(sum())

//================ HASIL =================//

let arr1 = [5,2,7,4,8,12];

let hasil = 1 
function total(){
    for(i=0;i<arr1.length;i++){
       hasil = hasil * arr1[i]; 
    }
    return hasil;
}
console.log(total());
