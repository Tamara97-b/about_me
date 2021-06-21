let name = prompt("is my name farah?")
if(name.toLowerCase()=="no")
{
    alert('right i am tamara')

    console.log("right i am tamara" + name);
}
else 
{alert('no i am tamara')
console.log("no i am  tamara" +name);
}
let age = prompt("is my age under 25?")
if (age.toLowerCase() =="yes"
){alert("right i am 24")
console.log("right i am 24"+age);

}else{alert("no i am 24")
console.log("no i am 24" +age);
}
let natioality = prompt("is i am jordanian?")
if( natioality.toLowerCase()=='yes')
{alert('pravo')
console.log("pravo" +natioality);}
else {
    alert('no i am jordanian')
    console.log("no i am jordanian" + natioality);}
let major = prompt('is i am engineer?')
if (major.toLowerCase() == 'yes')
{alert('no i am nutritionist')
console.log("no i am nutritionist"+major);}
else{alert('good job')
console.log("good job"+major);}

let dish = prompt('is the mansaf my fav dish?')
switch(dish.toLowerCase() )
{case 'yes':alert ('right' )
console.log("right"+dish);
 break;
default:
     alert('no the mansaf is my fav')
     console.log("no the mansaf is my fav"+dish);;}
     document.write("welcome to my page");
