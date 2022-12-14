let array = [1, 4, 5, 6, 7];

function sum(array) {
    let max = 0;
    let min = array[0];

    for (i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    console.log(`The MAX number is: ${max}`);
    console.log(`The MIN number is: ${min}`);
    console.log(`The SUM of MAX and MIN number is: ${max + min}`);
}

sum(array);



// Bonus

let arrays = [1, 4, "T", 6, 19];

function sum1(arrays) {
    let max1 = 0;
    let min1 = arrays[0];

    for (i = 0; i < arrays.length; i++) {
        if (!isNaN(arrays[i])) {
            for (i = 0; i < arrays.length; i++) {
                if (max1 < arrays[i]) {
                    max1 = arrays[i];
                }
                if (min1 > arrays[i]) {
                    min1 = arrays[i];
                }
            }
        } else {
            continue;
        }
    }
    console.log(`The MAX number is: ${max1}`);
    console.log(`The MIN number is: ${min1}`);
    console.log(`The SUM of MAX and MIN number is: ${max1 + min1}`);
}

sum1(arrays);
