//Example of global objects in Node,  which some where window objects in the browser.

// require, exports, __dirname, __filename


// how setTimeout works

setTimeout( () => {
    console.log("3 seconds has passed!")
}, 1000)


//loops on interval setted

let time = 0

let timer = setInterval(() => {
    time+=2
    console.log(time + " seconds also passed")

    if (time > 6){

        console.log("exit...")
        clearInterval(timer)
       
    }
}, 3000);


console.log(__dirname)

console.log(__filename)