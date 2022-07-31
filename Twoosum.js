let ar = [1,2,3,4,6,7,8,9];

function twoSum(ar,target)  {
let hash = {};
let sum = []
ar.forEach((item) => {
    let diff = target - item
    if( hash[diff.toString()] !== undefined) {
        sum.push([item,diff])
    }
    else
    {
        hash[item.toString()] = item;
    }
})
return sum
}
console.log(twoSum(ar,9))