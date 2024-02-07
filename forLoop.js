console.log('even & odd numbers');
for(var i=0; i<20; i+=2){
    console.log(i);
}
for(var i=1; i<20; i+=2){
    console.log(i);
}


console.log('show an array elements');
var numbers=[12,32,45,65,25,12,45,78,98,63,25,55];

for(var i=0; i<numbers.length; i++){
    var number = numbers[i]
    // if(number>60){
    //     break;
    // }
    if(number >44 ){
        continue;
    }
    console.log(number);
}
