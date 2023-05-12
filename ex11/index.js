let students = ["spongebob","patrick","squidward"];
students.forEach(capitalize)


function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(students)