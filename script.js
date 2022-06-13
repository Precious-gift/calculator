const display = document.querySelector('#display');

function show (ev) {
    if (ev.currentTarget.value == "=") {
        display.value = eval(display.value);
    } else if (ev.currentTarget.value == "C") {
        display.value = "";
    }else {
        display.value += ev.currentTarget.value;
    }
}