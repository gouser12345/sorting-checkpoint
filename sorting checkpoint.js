function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        // Pick the element to be inserted
        const currentElement = arr[i];

        // Start comparing with elements before it in the sorted sequence
        let j = i - 1;
        
        // Move elements greater than currentElement to the right
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the currentElement in the correct position
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray.slice()); // Make a copy to preserve the original array
console.log("Original Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
