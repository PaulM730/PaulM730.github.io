let count = 0;
let timer = null;

const output = document.getElementById("outputPlace");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

start.addEventListener("click", function () {

    if (timer !== null) return;

    timer = setInterval(function () {
        count++;
        output.textContent = count;
    }, 1000);

});

stop.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

//added for fun
reset.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    count=0;
    output.textContent = count;
});