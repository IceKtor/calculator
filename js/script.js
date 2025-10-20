const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const buttonscolor = document.querySelectorAll('.btncolor');
const buttonc = document.querySelectorAll('.btnc');
const buttonop = document.querySelectorAll('.btnop');

let currentInput = '';


buttonscolor.forEach(button => {
    button.addEventListener('click', (e) => {
    const value = e.target.dataset.value;

    if (value === '=') {
currentInput = eval(currentInput).toString();
    }

display.value = currentInput;
});
});

buttons.forEach(button => {
button.addEventListener('click', (e) => {
const value = e.target.dataset.value;


if (value === '=') {
currentInput = eval(currentInput).toString();
} else if (value === 'C') {
currentInput = '';
} else {
currentInput += value;
}

display.value = currentInput;
});
});

buttonc.forEach(button => {
    button.addEventListener('click', (e) => {
    const value = e.target.dataset.value;

if (value === 'C') {
currentInput = '';
}

display.value = currentInput;
});
});

buttonop.forEach(button => {
    button.addEventListener('click', (e) => {
    const value = e.target.dataset.value;

if (value === '=') {
currentInput = eval(currentInput).toString();
} else if (value === 'C') {
currentInput = '';
} else {
currentInput += value;
}

display.value = currentInput;
});
});