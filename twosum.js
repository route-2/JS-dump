const arr = [2,7,11,15]
const target = 9

let map = new Map()

for(let i = 0;i<arr.length;i++){
    let num1 = arr[i]
    let diff = target - num1 // 9 - 2 = 7
    if(map.has(diff)){ // if map has 7
       
        console.log(map.get(diff),num1)
    }
    map.set(arr[i],i)
    console.log(false) 
}