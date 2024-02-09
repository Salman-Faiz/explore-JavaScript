var student ={
     id: 1256, 
     name:'salman faiz',
      class: 'b.sc',
       salary: 0
    };

console.log(student.name);

var mobile ={ 
    Brand: 'xiaomi note 11',
    color:'blue',
    ram:'8gb',
    rom:'128gb',
    camera:'50px'};

    console.log(mobile.rom);

    var shoppingCart ={
        monitor: 8,
        mouse:5,
        soundbox:9,
        keyboards:6,
        rgbLight:4
    }

    var salmanShoppingList = Object.keys(shoppingCart);
    console.log(salmanShoppingList);

    var shoppingQuantity =Object.values(shoppingCart);
    console.log(shoppingQuantity);
    // set propertyValues,,,,...........
    
    shoppingCart.mouse=55;
    console.log(shoppingCart);

    shoppingCart['soundbox']=40;

    console.log( shoppingCart);

    // get propertyValues................

    var mouseCount = shoppingCart.mouse;
    console.log(mouseCount);