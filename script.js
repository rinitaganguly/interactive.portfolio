function toggleTheme() {
    document.body.classList.toggle("light");
}

// Animated counter
let count = 0;
let target = 2;

let interval = setInterval(() => {
    count++;
    document.getElementById("counter").innerText = count;

    if (count === target) {
        clearInterval(interval);
    }
}, 500);
function changeText() {
    document.getElementById("text").innerText =
        "You just interacted with my website!";
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}