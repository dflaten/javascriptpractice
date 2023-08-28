let numbersToSort = [100, 1, 2, 23, 54, 231, 17, 6, 19, 34];
 
function quickSort(sortMe, size) {
   if (size < 2) {
    return;
   }

   const mid = Math.floor(size / 2);
   let leftHalf = [];
   let rightHalf = [];

   //Split array into left and right sides
   for(let i = 0; i < mid; i++) {
    leftHalf[i] = sortMe[i];
   }

   for(let j = mid; j < size; j++) {
    rightHalf[j - mid] = sortMe[j];
   }
   quickSort(leftHalf, mid);
   quickSort(rightHalf, size - mid);
   merge(sortMe, leftHalf, rightHalf, mid, size-mid);
}

function merge(sortMe, leftHalf, rightHalf, leftSize, rightSize) {
   leftIterator = 0;
   rightIterator = 0;
   sortMeIterator = 0;

   while(leftIterator < leftSize && rightIterator < rightSize) {
        if(leftHalf[leftIterator] <= rightHalf[rightIterator]) {
            sortMe[sortMeIterator] = leftHalf[leftIterator];
            sortMeIterator++;
            leftIterator++;
        } else {
            sortMe[sortMeIterator] = rightHalf[rightIterator];
            sortMeIterator++;
            rightIterator++;
        }
    }
    // Place remaining items, only one of these will run due to the check in the 
    // previous while loop.
    while (leftIterator < leftSize) {
        sortMe[sortMeIterator] = leftHalf[leftIterator];
        sortMeIterator++
        leftIterator++;
    }
    while (rightIterator < rightSize) {
        sortMe[sortMeIterator] = rightHalf[rightIterator];
        sortMeIterator++;
        rightIterator++;
    }
}
console.log("Before Sorting: " + numbersToSort);
quickSort(numbersToSort, 10);
console.log("After Sorting: " + numbersToSort);