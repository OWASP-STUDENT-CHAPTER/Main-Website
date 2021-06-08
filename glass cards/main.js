const firstBtn = document.getElementById('coreBtn');
const secondBtn = document.getElementById('exboBtn');
const coreDiv = document.getElementById('core');
const exboDiv = document.getElementById('exbo');

firstBtn.addEventListener('click', (e) => {
    e.preventDefault();
    coreDiv.style.display = "";
    exboDiv.style.display = "none";
});

secondBtn.addEventListener('click', (e) => {
    e.preventDefault();
    coreDiv.style.display = "none";
    exboDiv.style.display = "";
});