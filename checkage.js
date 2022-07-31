let people = [ 
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
    { name: "Joe", age: 22 },
];

function groupBy(ar)
{
    var check = {}; // empty object to check if the key already exists in the object
    ar.forEach((item) => {
        if(item.age in check) {
            check[item.age].push(item.name);
        }
        else {
            check[item.age] = [item];
        }
    })
    return check
}
console.log(groupBy(people));