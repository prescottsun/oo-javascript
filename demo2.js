(function() {
    function addNumbers(a, b) {
        return a + b;
    }
    console.log(addNumbers(2, 4));
    
})();

(function() {
    const addNumbers = (a, b) => {
        console.log('a and b are ', a, b);
        return a + b;
    };
        console.log(addNumbers(9,10));

})();