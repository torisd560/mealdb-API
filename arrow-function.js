// 3.1
const num = () =>89;
// console.log(num())
//3.2
const divison = num => num/7;
// console.log(divison(49))
//3.3
const calculate = (num1, num2=9)=>(num1+num2)/2;
// console.log(calculate(5))
//3.4
const calculate2 = (first,second)=>{
    const result1= first+7;
    const result2  =second+ 7;
    const finalResult =result1+ result2 ;
    return finalResult;
}
// console.log(calculate2(5,10))
//4.
const numbers = [45, 23, 12, 67, 90, 49];
const result = numbers.map(number=> Math.floor(number/7))
// console.log(result)
//5.
const filter = numbers.filter(number=>number%2!=0)
// console.log(filter)
const find = numbers.find(number=>number%2!=0)
// console.log(find)
// numbers.forEach(number => console.log(number));
