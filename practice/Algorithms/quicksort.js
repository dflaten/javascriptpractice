let numbersToSort = [100, 1, 2, 23, 54,231, 17, 6, 19, 34];
 
function quickSort(sortMe) {
   const size = sortMe.length;
   if (size < 2) {
    return;
   }

   // The middle item in the array is used as the pivot point.
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

// This function will always produce a sorted sortMe array and because we
// are calling quickSort on every half of the array until we get down to 
// 1 item that means by the time we start merging we are merging sorted
// halves. 
function merge(sortMe, leftHalf, rightHalf, leftSize, rightSize) {
    console.log("----------")
    console.log("SortMe: " + sortMe);
    console.log("Merge Left Half:" + leftHalf);
    console.log("Merge Right Half:" + rightHalf);
    console.log("----------")
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
    console.log('++++++++++')
    console.log("SortMe: " + sortMe);
    console.log('++++++++++')
}
console.log("Before Sorting: " + numbersToSort);
quickSort(numbersToSort);
console.log("After Sorting: " + numbersToSort);
console.log("--------");
