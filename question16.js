//       Vaid - Hello Shery, You are a valid voter.
// Invalid - Sorry Shery, you can't cast the vote.
let name=prompt("enter name");
let age=+prompt("enter age");
if(age===18 || age >18){
    console.log("Vaid - Hello " +name + ", You are a valid voter.")
}
else 
console.log("Invalid - Sorry " +name + ", you can't cast the vote." + "but after "  + ( 18-age) + "year you will vote" )