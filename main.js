
let first = [1, 2, 3, 4, 5];
let second = [];

let arr = 0;
for (let i = first.length - 1; i >= 0; i--) {
  arr += first[i];
  second.unshift(arr);
}

console.log(second);

let arr2 = [2,10,5,8,12]
let result = []

let all = 0
for(let i=arr2.length - 1; i>=0; i--){
    all += arr2[i]
    result.unshift(all)
}


console.log(result);


// LAST 


let arr1 = [9,14,3,2,1]
let finalR = []

let amount = 0
for(let i = arr1.length-1; i>=0; i--){
    amount+=arr1[i]
    finalR.unshift(amount)
}
console.log(finalR);