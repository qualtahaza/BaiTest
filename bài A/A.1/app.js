const nhapArray1 = prompt("Nhập vào array số 1 ngăn cách nhau bởi dấu cách");
const nhapArray2 = prompt("Nhập vào array số 2 ngăn cách nhau bởi dấu cách");
const convertString1 = nhapArray1.split(" ");
const convertString2 = nhapArray2.split(" ");
console.log(convertString1);
console.log(convertString2);

const mergeString = []
for (i = 0; i < convertString1.length; i++) {
    mergeString.push(convertString1[i])

};
for (y = 0; y < convertString2.length; y++) {
    mergeString.push(convertString2[y])
}
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

let uniq = findDuplicates(mergeString)

for (let a = 0; a < mergeString.length; a++) {
    for (let b = 0; b < uniq.length; b++) {
        if (mergeString[a] == uniq[b]) {
            mergeString.splice(a, 1)
        }
    }


}
console.log(mergeString);