const textbox = document.getElementById("textbox")
const result = document.getElementById("result")

const CtoF = document.getElementById("CtoF")
const FtoC = document.getElementById("FtoC")
const CtoK = document.getElementById("CtoK")
const FtoK = document.getElementById("FtoK")
const KtoF = document.getElementById("KtoF")
const KtoC = document.getElementById("KtoC")

let temp

function convert(){
    if(CtoF.checked){
        temp = Number(textbox.value) * 9 / 5 + 32
        result.textContent = temp.toFixed(2) + "°F"  
    }
    else if(FtoC.checked){
        temp = (Number(textbox.value) - 32) * 5 / 9
        result.textContent = temp.toFixed(2) + "°C"
    }
    else if(CtoK.checked){
        temp = Number(textbox.value) + 273.15
        result.textContent = temp.toFixed(2) + "K"
    }
    else if(FtoK.checked){
        temp = (Number(textbox.value) - 32) * 5 / 9 + 273.15
        result.textContent = temp.toFixed(2) + "K"
    }
    else if(KtoF.checked){
        temp = (Number(textbox.value) - 273.15) * 9 / 5 + 32
        result.textContent = temp.toFixed(2) + "°F"
    }
    else if(KtoC.checked){
        temp = Number(textbox.value) - 273.15
        result.textContent = temp.toFixed(2) + "°C"
    }
    else{
        result.textContent = "Please select a unit"
    }
}