let n=5;
let evensum=0;
let oddsum=0;
for(let i=1; i<=n;i++){
if(i%2===0){
    evensum=evensum+i;
    
}
else{
    oddsum+=i;
    
}
}
console.log(evensum);
console.log(oddsum);

