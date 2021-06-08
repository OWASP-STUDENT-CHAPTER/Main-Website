const firstBtn = document.getElementById('coreBtn');
const secondBtn = document.getElementById('exboBtn');
const thirdBtn = document.getElementById('membersBtn');
const coreDiv = document.getElementById('core');
const exboDiv = document.getElementById('exbo');
const membersDiv = document.getElementById('members');


firstBtn.addEventListener('click', (e) => {
    e.preventDefault();
    coreDiv.style.display = "";
    exboDiv.style.display = "none";
    members.style.display="none";

});

secondBtn.addEventListener('click', (e) => {
    e.preventDefault();
    coreDiv.style.display = "none";
    exboDiv.style.display = "";
    members.style.display="none";
});
thirdBtn.addEventListener('click', (e) => {
    e.preventDefault();
    coreDiv.style.display = "none";
    exboDiv.style.display = "none";
    members.style.display="";
});