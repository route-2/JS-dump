const toDup = (arry) => {
    const uniq = new Set(arry);
    const filt = arry.filter(item => {
        if (uniq.has(item))
        {
            uniq.delete(item);
        }
        else 
        {
            return item;
        }
    });
    return [...new Set(uniq)]
}
const arry = [1,2,1,3,4,3,5]
const dup = toDup(arry)
console.log(dup)