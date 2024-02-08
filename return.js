function add(num1,num2,num3){
    console.log(num1, num2, num3);
    var sum= num1+ num2+num3;
    return sum;
}
var total = add(20,20,20);
console.log(total);


function singaraNiyeAso(money){
    var potiSingaraPrice =10;
    var singaraPabo= money/potiSingaraPrice;
    return singaraPabo;
}
var amarTaka =300;
 var sorboMotSingara = singaraNiyeAso(amarTaka); 
 console.log('sorbo Mot Singara',sorboMotSingara);