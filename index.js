function receivesAFunction(a) {
    return a();
} 

function returnsANamedFunction() {
    const namedFunction = x => x;
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function(x) {
        console.log(x);
    }
}