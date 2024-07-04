let INCREASE = document.querySelector("#INCREASE")
let DECREASE = document.querySelector("#DECREASE")
let REST = document.querySelector("#REST")
let num = document.querySelector("#num")

let zero = 0
num.innerHTML = zero
INCREASE.addEventListener("click" , () => {
    zero++
    num.innerHTML = zero
})

REST.addEventListener("click" , () => {
    zero = 0
    num.innerHTML = zero
})

DECREASE.addEventListener("click" , () => {
    zero--
    if (zero < 0) {
        zero =0
    }
    else {
        num.innerHTML = zero

    }
})


