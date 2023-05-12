const inner_div = document.getElementById("innerdiv");
const outer_div = document.getElementById("outerdiv");

inner_div.addEventListener("click", changeblue)
outer_div.addEventListener("click", changeblue)


function changeblue () {
    this.style.backgroundColor = "blue"
}

