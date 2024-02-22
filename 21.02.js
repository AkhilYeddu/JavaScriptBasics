// to declare a variable
let a =10;
//let is a keyword
const pi=3.14
//constant,cant be changed
let b="ioi";
console.log(b);
//string
let c= true;
//boolean

// four types of datatypes:
// primitive=num
// non primitive=string
// null
// undefined
//symbols
// JAVASCRIPT ARRAY CAN HOLD ANY KIND OF DATATYPES( all primitive and non primitve)

let ioi=[1,2,"ioi",true]

let user1={
    Name : "Akhil",
    age : 18,
    email : "akhilkiu10@gmailcom"
}
console.log(user1)
console.log(user1.Name)

// conditional statements:
// if else
// switch= for normal checking
// ternary=used for minimal checking
//every program we do, we should do  it in try catch
let shash=true;
shash? console.log("handsome"):console.log("not handsome");
console.log("hello"+shash);
console.log("shashu");

for(let i=1;i<=10;i++)
{
    console.log(i);

}

//we max. use for of and for in loops, will be explained later.

//Functions
function Student()
{
    let mob=8919562972;
    let name="akhil";
    return name+" "+mob;//declartion
    
}

res=Student();
console.log(res);

Student() //invoke

//how does function parameter work in JS?
// call by value or call by reference?
