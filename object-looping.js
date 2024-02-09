var houseItems ={
    light:5,
    fan:4,
    tubelight :4,
    dressingTable : 5,
    ips : 1,
    computer : 4
};
var keys =Object.keys(houseItems);
var values =Object.values(houseItems);

console.log(keys,values);

for( var i=0; i<keys.length; i++ ){
    // var printkeys= keys[i];
    // console.log(keys[i]);
    var propertyName =keys[i];
    var propertyValues =houseItems[propertyName];
    console.log(propertyName,  propertyValues);
}