// a normal named function 

function sum(a,b) {
    return a + b
}


result = sum(4,10)

console.log(result)


// using an anonymous function expression

let name = function (name) {
    return name
}

// calling the function without storing in a variable will return just a function object.

 answer = name("fredrick")

console.log(answer)