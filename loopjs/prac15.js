//  2. Find the largest number in an array using a loop

let arr = [10,20,30,40,50]
let largest = arr[0]

for (let i=1; i<=arr.length ; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log("Largest=",largest);