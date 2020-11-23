const passwordLm = document.getElementById("password");
const copyLm = document.getElementById("copy");
const lenthLm = document.getElementById("lenth");
const upperLm = document.getElementById("upper");
const lowerLm = document.getElementById("lower");
const numberLm = document.getElementById("number");
const symbelLm = document.getElementById("symbel");
const genaratLm = document.getElementById("genarat");
const showPassword = document.getElementById("pgrt");

const upperCaseLettors = "ABCDEFGHIJKLMOPQRSTUWXYZ";
const lowerCaseLettor = "abcdefghijklmopqrstuwxyz";
const numbers = "134567890";
const symbols = "!@#$%$^&*()_|}{';[]`~,./:>?<";

function getUpperCase() {
    return upperCaseLettors[Math.floor(Math.random() * upperCaseLettors.length)];
}

function getLoverCase() {
    return lowerCaseLettor[Math.floor(Math.random() * lowerCaseLettor.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbels() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
function genaretPassword() {
    const len = lenthLm.value;
    let password = '';
    for (let i = 0; i < len; i++) {
        const x = genatatex();
        password += x;
    }
    showPassword.innerHTML = password;
}

function genatatex() {
    const xs = [];

    if (upperLm.checked) {
        xs.push(getUpperCase());
        console.log(copyLm);
        copyLm.classList.add("displayButt");
    }
    if (lowerLm.checked) {
        xs.push(getLoverCase());
        copyLm.classList.add("displayButt");
    }
    if (numberLm.checked) {
        xs.push(getNumber());
        copyLm.classList.add("displayButt");
    }
    if (symbelLm.checked) {
        xs.push(getSymbels());
        copyLm.classList.add("displayButt");
    }
    if (xs.length === 0) {
        copyLm.classList.remove("displayButt");
        return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

copyLm.addEventListener("click", () => {
    const textAria = document.createElement("textarea");
    const password = showPassword.innerText;
    console.log(password);

    textAria.value = password;
    document.body.appendChild(textAria);
    textAria.select();
    document.execCommand("copy");
    alert(textAria.value);
    textAria.remove();
})
genaratLm.addEventListener("click", genaretPassword);