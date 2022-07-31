let arr = ["hello", "hello", "world", "how","hello","are", "are", "you"];

function CcountWord(p)
{
    var count = {};
    p.forEach((item) => {
        if(item in count) {
            count[item]++;
        }
        else {
            count[item] = 1;
        }
    })
    return count
}
console.log(CcountWord(arr));