const findDup = (arry) => {
const myset = new Set(arry);
const count = 0
const filterEle = arry.filter(item => {
    if(myset.has(item)){
        myset.delete(item);
    }
    else 
    {
        count = count +1
    }
    return count
})

}

const arry = [1,2,1,3,4,3,5]
const ans = findDup(arry)
console.log(ans)