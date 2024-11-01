// prime
let num=+prompt("enter num");
if(num==1){
    console.log("i is neighter prime nor composite");

}
else if(num<1){
    console.log("negative is not a prime and also 0");

}
else{
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is not a prime number.`);
    }
}