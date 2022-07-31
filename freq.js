let arr = ["hello", "hello", "world", "how","hello","are", "are", "you"];

function countWord(p) {
    let result = p.reduce((allNames, name) => {
        if(name in allNames) {
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});
    return result;
}
console.log(countWord(arr));
//The reduce() method takes in:

//callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
//accumulator - It accumulates the callback's return values.
//currentValue - The current element being passed from the array.
//initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.