let c = 0;
let id = setInterval(() => { // prints c every 3 milli second until for 2 seconds
    console.log(c++);
} , 300)
setTimeout(() => { // after 2 secs it doesnt run the interval function
   clearInterval(id)
}, 2000)

