const span = document.querySelector('span')
const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnClean = document.querySelector('#btnClean')

let interval

btnStart.onclick = () => {
    btnStart.disabled = true
    btnPause.disabled = false

    let value = parseFloat(span.innerHTML)

    interval = setInterval(()=> {
        value += 0.1

        span.innerHTML = value.toFixed(1)
    }, 100);
}

btnPause.onclick = () => {
    btnStart.disabled = false
    btnPause.disabled = true
    
    clearInterval(interval)
}

btnClean.onclick = () => {
    btnStart.disabled = false
    btnPause.disabled = true
    
    clearInterval(interval)
    span.innerHTML = "0.0"

}