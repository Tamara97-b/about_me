'use strict'
let score =0 ;


let userName = prompt('what\'s your name');
alert('Welcome to my webpage ' + userName);
console.log(userName);

function q1(){
let name = prompt("is my name farah?")
if(name.toLowerCase()=="no"|| name.toLowerCase()=='n')
{
    alert('right i am tamara')
    score++;

    console.log("right i am tamara" + name);
}
else 
{alert('no i am tamara')
console.log("no i am  tamara" +name);
}}
q1()
function q2(){
    let age = prompt("is my age under 25?")
if (age.toLowerCase() =="yes"|| age.toLowerCase()=='y' 
){alert("right i am 24")
score++;
console.log("right i am 24"+age);

}else{alert("no i am 24")
console.log("no i am 24" +age);
}}
q2()
function q3(){
    let natioality = prompt("is i am jordanian?")
if( natioality.toLowerCase()=='yes'||natioality.toLowerCase()=="y")
{alert('pravo')
score++;
console.log("pravo" +natioality);}
else {
    alert('no i am jordanian')
    console.log("no i am jordanian" + natioality);}}
   q3()
   function q4( ){
let major = prompt('is i am engineer?')
if (major.toLowerCase() == 'yes'||major.toLowerCase() =='y')
{alert('no i am nutritionist')
console.log("no i am nutritionist"+major);}
else{alert('good job')
score++;
console.log("good job"+major);}
}
q4()
function q5( ){
let dish = prompt('is the mansaf my fav dish?')
switch(dish.toLowerCase() )
{case 'yes'||"y":alert ('right' )
score++;
console.log("right"+dish);
 break;
default:
     alert('no the mansaf is my fav')
     console.log("no the mansaf is my fav"+dish);;}
     document.write("welcome to my page");}
     
     q5()
     function q6(  ){
     let num;
     let v ;
     for(  num=0 ; num < 4 ;num++ )
     {
     
        let x= prompt ('guess my fav number');
         if (x <5){
             alert ('this number is smaller ');
             console.log('this number is smaller  '+x);
             
         }

         else if (x>5){
             alert ('this number is bigger ');
             console.log('this number is bigger  ' +x);
         }
         else if(x == 5) { alert ('bravo');
         score++;
         
         console.log('bravo'); v=true;
         num=4;
         break;
        }
        
     }
    if(v!= true&& num == 4) {
       
        alert('good luck but my fav num is 5');
        console.log('good luck but my fav num is 5');



    }}
q6()
function q7(){
    let t = ['jordan','usa','qatar','oman']
    let i ;
    let k;
    for(i = 0 ; i<6 ;i++)
    {
        let f = prompt('guess my fav country' + ' you have 6 attempt').toLowerCase()
for(let j=0 ; j<t.length ;j++){
if (f== t [j]){
    alert ('goood u know about me');
    console.log('goood u know about me');
    score++;
   k = true ;
    i=6; break;

}

    }
    if (i!=6 ){
        alert('you are wrong');
        console.log('you are wrong');

    }
}
if (i== 6 && k!=true){
    alert('you failed my best countries are  '+t )
    console.log('you failed my best countries are  '+t);
}
alert('your score'+ score)
console.log('your score '+ score);}
q7()