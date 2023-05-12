let numbers = [1,2,3,4,5,6,7]
let numbers1 = [8,9,10,11,12]
numbers.push(...numbers1)
for (let f of numbers) {
    console.log(f);
}
