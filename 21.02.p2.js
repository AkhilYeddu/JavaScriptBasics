function multiply(arr) //no need to give parameters. a variable will be created and will store all the values in the form of array.This is actually kind args.
{
    let prod=1;
    for(let i=1;i<arr.length;i++)
    {
        prod=prod*arr[i];
        
    }
    return prod;

}



let numbers=[1,2,3,4,5,6,7];
let res= multiply(numbers);
console.log(res);