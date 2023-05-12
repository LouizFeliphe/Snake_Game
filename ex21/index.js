let count = 0
let max = window.prompt("Count up to what #?");
max = Number(max);

const my_timer = setInterval(() => {
    count += 1
    alert(count)
    if (count >= max) clearInterval(my_timer)
}, 3000);

