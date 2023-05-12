let grades = [100,50,90];
grades = grades.sort(descendingSort);

function descendingSort(x,y) {
    console.log(x)
    console.log(y)
    return x - y;
}
console.log(grades)