function findDup  (arry)  {


const mySet = new Set(arry);
const filterEle = arry.filter(item => {
    if(mySet.has(item)){
        mySet.delete(item);
    }
    else 
    {
        return item;
    }
}) ;
return [...new Set(filterEle)];
}

const arry = [1,2,1,3,4,3,5]
const ans = findDup(arry)
console.log(ans)
