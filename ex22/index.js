const mylabel = document.getElementById("mylabel");
setInterval(update,1000);

function update(){
    let date = new Date();
    let year = formatzeroes(date.getHours());
    let day = formatzeroes(date.getMinutes());
    let month = formatzeroes(date.getSeconds());
    mylabel.innerHTML = `${year}:${day}:${month}`;

    function formatzeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time: time;

    }
}