console.log("hello world")
var x = 2 + 4;
console.log(x)

var name;
name = "neha"
console.log( name)

var y = 1125;
var answer = y % 2;
console.log(answer)


var a = true;
var b = true;
var c = true;
console.log ((a && b && c))

var answer1 = 10 - 3 *5/4 + 202 % 3;
console.log(answer1)

var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer2)

var z = Number("12");
console.log(z)

var n = parseInt("12");
console.log(n)

//result = '34' + 5;
//console.log(result)

console.log('34' + 5)

var d = ['hello', 'world'];
console.log(d[0]);
console.log(d[1]);

var myArray = new Array();
myArray.push('apples');
myArray.push('oranges');
myArray.push('pears');

console.log(myArray);
var length = myArray.push();
console.log(length);

var lastElement = myArray.pop();
console.log(lastElement);
console.log(myArray);

myArray.splice(2,0,'cherries','kiwi');
console.log(myArray);

var elements = myArray.splice(1,2);
console.log(elements);
console.log(myArray);

/*var elements1 = unShift.myArray('lemon');
console.log(elemets1);
console.log(myArray);*/

function shouldIGoOutTonight(dayOfTheWeek) {
    if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Wednesday" || dayOfTheWeek == "Thursday" || dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
        console.log("NO WAY! You should be coding...");
    }
    else {
        console.log("Yeah... I guess if you need a break.");
    }

};

shouldIGoOutTonight('all');


function shouldIGoOutTonight(dayOfTheWeek) {
    if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Wednesday") {
        console.log("NO WAY! You should be coding...");
    }
    else if (dayOfTheWeek == "Thursday") {
        console.log("Depends! Is there a special on wings today?")
    }
    else if (dayOfTheWeek == "Friday") {
        console.log("Yeah... I guess if you need a break.");
    }
    else if (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
        console.log("I don't know, seems like a good day to read about JavaScript.");
    }
    else {
        console.log("That is not a valid day of the week... have you already been partying?");
    }

};

shouldIGoOutTonight('Saturday');
    
for (var i = 0; i < 9; i++) {
    console.log(i);
}

console.log('loop is done');
