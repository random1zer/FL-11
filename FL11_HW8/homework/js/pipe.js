
function addOne(a) {

    return a + 1;

}
function pipe(number) {

    for(let x = 1; x < arguments.length; x++) {

        let next = arguments[x];

        number = next(number)

    }

    return number;

}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne)); 