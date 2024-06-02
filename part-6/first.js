// Write a JavaScript function that returns array elements larger than a number

let arr = [12, 45, 67, 34, 90, 14, 21, 69, 2, 1, 12];

function largNum(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>num) {
            console.log(arr[i]);
        }
    }    
}
largNum(arr, 30)
