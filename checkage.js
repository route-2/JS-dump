let people = [ 
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ron", age: 20 },
];

function groupBy(ar)
{
    var check = {}; // empty object to check if the key already exists in the object
    ar.forEach((item) => {
        if(item.age in check) {
            check[item.age].push(item.name + " " + item.age);
        }
        else {
            check[item.age] = [item.name + " " + item.age];
        }
    })
    return check
}
console.log(groupBy(people));