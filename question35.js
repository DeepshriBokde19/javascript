let num=936;
let sum=0;
while(num!=0){
    let digi=num%10;
    // rem=3
    // console.log(digi);
sum=sum+digi;
console.log(sum);
    num=Math.floor(num/10);
}