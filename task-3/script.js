
//Task-3

 var person = [ 
    {
        name: 'Kazim',
        role: 'react dev',
        status: true
    },
    {
        name: 'Vugar',
        role: 'angular dev',
        status: false
    },
    {
     name: 'Mugan',
        role: 'javascript dev',
        status: true
    }];
//Statusu false olanlarin promotion almadigini, true olanlarin ise promotion aldigini eks etdiren cumle yazin
//ipucu - for, if
var x = person.forEach((item)=>{
    if(item.status==true){
          console.log('Receives promotion')
     }
     else{
         console.log('promotion does not rise')
     }
})

