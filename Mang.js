var a = [1,2,3,12];
var b = [2,3,44];
var c = [22,33,44,0,55];
var x = [22222,22,33]
a.push(x);
console.log(a)
//console.log(a.concat(b).concat(c))
function joinArray(array1,array2,array3) { // ham noi cac phan tu cua cac mang
    return array1.concat(array2).concat(array3);

}
function pushArray(array,n){
    console.log( array.push(n));

}
function shiftArray(array1){// ham lay phan tu dau tien cua mang
    return array1.shift();
}
function popArray(array1){ // ham tra ve gia tri cuoi cung cua mang pop
    return array1.pop();
}
console.log(a.isArray(2))
//console.log(pushArray(a,222))
//console.log(joinArray(a,b,c));
// console.log(pushArray(a));
// console.log(typeof pushArray(a));
//  console.log(shiftArray(a));
//console.log(popArray(a));
//console.log(typeof a)