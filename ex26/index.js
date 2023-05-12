let element = document.getElementById("dessert");
let children = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "green")

