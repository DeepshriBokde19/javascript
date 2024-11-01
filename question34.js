/* Seprate each digit of a number and print it on the new line ex - 123 
	OP
		3
		2
		1

*/  


let num=123;
while(num!=0){
    let digi=num%10;
    // rem=3
    console.log(digi);
    num=Math.floor(num/10);
}