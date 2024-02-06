var salary = [120, 320, 45, 450, 100, 130, 220 ];
salary.push(300);

console.log(salary);
var lastPopedValue = salary.pop();
console.log(lastPopedValue);
salary.push(750);
salary.push(555);
salary.push(666);


salary.unshift(777,555,444,999);
console.log(salary);

console.log(salary.length);
salary.pop();

// splice() method use for add a element to a particular location

salary.splice(2,0,222);
console.log(salary);

salary.splice(0,1,2,3);
console.log(salary);