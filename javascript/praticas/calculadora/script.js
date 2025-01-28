let display = document.querySelector('div#display')
let resultOnScreen = false
document.getElementsByClassName('num').style.backgroundColor = 'blue'

function buttonClicked(val) {
    if (val == '^') {
        val = '**'
    }
    if (display.innerHTML == 'Error') {
        display.innerHTML = ''
    }
    if (resultOnScreen &&  val >= 0 && val <= 9) {
        display.innerHTML = ''
    }
    display.innerHTML += val
    resultOnScreen = false
}

function equals() {
    let displayValue = display.innerHTML
    if (displayValue[displayValue.length-1] != Number) {
        display.innerHTML = 'Error'
    }
    display.innerHTML = eval(displayValue)
    resultOnScreen = true
}

function clean() {
    display.innerHTML = ''
}
