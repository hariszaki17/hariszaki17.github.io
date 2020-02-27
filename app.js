let score1 = 0
let score2 = 0


plus1 = document.querySelector("#bc1 #plus")
minus1 = document.querySelector("#bc1 #minus")
reset1 = document.querySelector("#bc1 #reset")

plus2 = document.querySelector("#bc2 #plus")
minus2 = document.querySelector("#bc2 #minus")
reset2 = document.querySelector("#bc2 #reset")

plus1.addEventListener("click", function(){
    score1 = changer(score1, addition(score1), "res1")
    
})

minus1.addEventListener("click", function(){
    score1 = changer(score1, substraction(score1), "res1")
})

reset1.addEventListener("click", function(){
    score1 = changer(score1, 0, "res1")
})


plus2.addEventListener("click", function(){
    score2 = changer(score2, addition(score2), "res2")
    
})

minus2.addEventListener("click", function(){
    score2 = changer(score2, substraction(score2), "res2")
})

reset2.addEventListener("click", function(){
    score2 = changer(score2, 0, "res2")
})

function changer(score, change, element){
    score = change
    document.getElementById(element).innerHTML = score
    return score
}

function addition(score){
    score++
    return score
}

function substraction(score){
    if (score > 0){
        score--
    }
    return score
}

const btnPrd1 = document.getElementById("btn-period1")
const btnPrd2 = document.getElementById("btn-period2")
let period = 0
btnPrd1.addEventListener("click", function(){
    if (period > 0){
        period--
        document.getElementById("period-count").innerHTML = period
    }
})

btnPrd2.addEventListener("click", function(){
    if (period < 5){
        period++
        document.getElementById("period-count").innerHTML = period
    }
})


let minute1 = 2
let minute2 = 0
let second1 = 0
let second2 = 0

const min1 = document.getElementById("minute1")
const min2 = document.getElementById("minute2")
const sec1 = document.getElementById("second1")
const sec2 = document.getElementById("second2")

const stop = document.getElementById("stop")
const restart = document.getElementById("restart")
let stopTag = false

restart.addEventListener("click", function(){
    minute1 = 2
    minute2 = 0
    second1 = 0
    second2 = 0

    min1.innerHTML = minute1
    min2.innerHTML = minute2
    sec1.innerHTML = second1
    sec2.innerHTML = second2
    clearInterval(setInt)
    stopTag = false
})

stop.addEventListener("click", function(){
    stopping()
})


let setInt

function stopping(){
    if (stopTag == false){
        setInt = setInterval(timer, 1000)
        stopTag = true
    }else {
        clearInterval(setInt)
        stopTag = false
    }
}


function timer(){
    if (second2 == 0 && second1 == 0 && minute2 == 0 && minute1 != 0){
        minute1 = changeTo9(minute1)
        minute2 = changeTo9(minute2)
        second1 = changeTo9(second1, 'second')
        second2 = changeTo9(second2)
    }
    else if (second1 == 0 && second2 == 0){
        minute2 = changeTo9(minute2)
        second1 = changeTo9(second1, 'second')
        second2 = changeTo9(second2)
    }else if (second2 == 0){
        second1 = changeTo9(second1, 'second')
        second2 = changeTo9(second2)

    }else{
        second2 = changeTo9(second2)
    }
    min1.innerHTML = minute1
    min2.innerHTML = minute2
    sec1.innerHTML = second1
    sec2.innerHTML = second2

}

function changeTo9(time, tag){
    if (time == 0 && tag != 'second'){
        time = 9
    }else if (time == 0){
        time = 5
    }else {
        time--
    }
    return time
}
