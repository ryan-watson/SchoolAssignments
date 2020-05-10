// Library of Search & Sort Functions

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    for (let i = 0; i < anArray.length; i++) {
        for (let n = 0; n < anArray.length-1; n++) {
            if(anArray[n] > anArray[n+1]) {
                [anArray[n], anArray[n+1]] = [anArray[n+1], anArray[n]]; //switches anArray[n] with the next element after it
            }
        }
    }
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for (let i = 0; i < anArray.length-1; i++) {
        let fill = anArray[i];
        for (let n = 1; n < anArray.length; n++) {
            if(anArray[n] < fill) {
                fill = anArray[n];
            }
        }
        [anArray[i], fill] = [fill, anArray[i]]; //It switches the fill with anArray[i]
    }
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    for (let i = 1; i < anArray.length; i++) {
        let saveValue = anArray[i];
        let insertPosition = i;
        
        while(insertPosition > 0 && anArray[insertPosition-1] > saveValue) {
            anArray[insertPosition] = anArray[insertPosition-1];
            insertPosition--;
        } 

        anArray[insertPosition] = saveValue;
    }
}