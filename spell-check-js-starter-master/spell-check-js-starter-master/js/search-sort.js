// Search & Sort Functions Library

// LINEAR SEARCH FUNCTION CRITERIA
// Search the anArray argument for the item argument using the linear search algorithm.
// If item found, return index where found, else return -1.
function linearSearch(anArray, item) {
    // **********************************

    for (i = 0; i <= anArray.length; i++) {
        if (anArray[i] == item) {
            return i;
        }
    }
    //ran through whole loop without finding it
    return -1;
    // **********************************
}

// BINARY SEARCH FUNCTION CRITERIA
// Search anArray for the item using the binary search algorithm.
// If item found, return index where found, else return -1.
function binarySearch(anArray, item) {
    // **********************************
    let li = 0;
    let ui = anArray.length - 1;
    let mi;
    while (li <= ui) {
        mi = Math.floor((li + ui)/2);
        if (anArray[mi] == item) {
            return mi;
        } else if (anArray[mi].localeCompare(item) > 0) {
            ui = mi - 1;
        } else { //found is = -1
            li = mi + 1;
        }
    }
    //nothing found return -1

    return -1;
    // **********************************
}