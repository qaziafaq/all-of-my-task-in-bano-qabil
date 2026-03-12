let counter = 0;

const counterDisplay = document.getElementById("counterDisplay");

const increaseFiveBtn = document.getElementById("increaseFiveBtn");
const increaseTenBtn = document.getElementById("increaseTenBtn");
const decreaseFiveBtn = document.getElementById("decreaseFiveBtn");
const decreaseTenBtn = document.getElementById("decreaseTenBtn");

increaseFiveBtn.addEventListener("click", function() {
    counter += 5;
    counterDisplay.textContent = counter;
});

increaseTenBtn.addEventListener("click", function() {
    counter += 10;
    counterDisplay.textContent = counter;
});

decreaseFiveBtn.addEventListener("click", function() {
    counter -= 5;
    counterDisplay.textContent = counter;
});

decreaseTenBtn.addEventListener("click", function() {
    counter -= 10;
    counterDisplay.textContent = counter;
});