const reverseString = function(str) {
    const strArray = str.split('');
    const newArray = [];
    for (let i = strArray.length - 1; i >= 0; i--) {
        newArray.push(strArray[i]);
    }
    return newArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
