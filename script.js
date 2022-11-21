

const nameInput = document.getElementById("nameInput")
const lbs = document.getElementById("lbs")
const output = document.getElementById("output")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")

class Abrakadabra{
    constructor (varName, kg){
        this.varName = varName
        this.kg = Number(kg)
        this.lbs = kg / 0.45359237
    }
    
    checkWeight = (targetInfo) => {
        let result = []
        if(targetInfo.varName != "" && !isNaN(targetInfo.kg) && targetInfo.kg != ""){
            //view output in web page
            result.push(`${targetInfo.varName}'s weight in lbs is ${targetInfo.lbs.toFixed(2)}`)
            output.innerHTML = result.join("")
            //view output in console
            console.log(`${targetInfo.varName}'s weight in lbs is ${targetInfo.lbs.toFixed(2)}`)  
            return targetInfo
        }else{
            output.innerHTML = ""
            alert("Inputs are required and lbs should be number...")
            return new Error("Inputs are required and lbs should be number...")
        }
    }
}


clear.addEventListener('click', () =>{
    output.innerHTML = ""
    nameInput.value = ""
    lbs.value = ""
})

submit.addEventListener('click', () => {
    let ayiee = new Abrakadabra(nameInput.value, lbs.value); 
    console.log(ayiee.checkWeight(ayiee))  
})

lbs.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit.click();
    }
  });

