const btn = document.querySelector('[type=button]')
let seconds = document.querySelector('[type=text]')
let msg = document.querySelector('#converted')

function convertSecsToMins(){
    let result = parseFloat(seconds.value) * 60
    msg.innerText = `${result} seconds`
}

btn.addEventListener('click', convertSecsToMins)