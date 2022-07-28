const arry = [1,2,1,3,4,3,5]

const toDup = arry => arry.filter((item,index) => arry.indexOf(item) != index)
const dupEle = toDup(arry)
console.log(dupEle)
// we compare the index of all the items of an array with the index of the first time that number occurs.
// If they don’t match, that implies that the element is a duplicate.All such elements are returned in a separate array using the filter() method.