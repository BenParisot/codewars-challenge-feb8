lowSum();
function lowSum() {
    const numArray = [23, 21, 53, 48, 4, 16, 23];
    numArray.sort(function(a,b) {
        return a - b;
    });
    const sum = numArray[0] + numArray[1];
    console.log(sum);
}