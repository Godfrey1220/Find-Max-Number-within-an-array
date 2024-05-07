function findMaxNumber(array) {

    let max = array[0];

    for(i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        }
    }

    return max;
}

findMaxNumber([1, 3, 2, 1, 1, 6, 1, 1])

module.exports = findMaxNumber;
