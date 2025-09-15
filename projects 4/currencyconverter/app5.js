

const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.4.24/v1/currencies/aed.json";


const fromCurr = document.querySelector(".form select")
    const toCurr = document.querySelector(".to select")
const dropdown =document.querySelectorAll("#a")
for(select of dropdown){
    Object.keys(countryList).map((a)=>{
            let newOption = document.createElement("option")
            newOption.innerHTML = countryList[a]
            newOption.value = countryList[a]
            console.log(dropdown)
            select.append(newOption)
    })}
document.querySelector("#a").addEventListener("change",(e)=>{
    console.log(e.target.value)
    document.querySelector("#fristiamge").src=`https://flagsapi.com/${e.target.value}/flat/64.png`
})
document.querySelector(".secondflag").addEventListener("change",(e)=>{
    console.log(e.target.value)
    document.querySelector(".secondimag").src=`https://flagsapi.com/${e.target.value}/flat/64.png`
})


const btn = document.querySelector("form button")


btn.addEventListener("click",  async(evt) =>{
    evt.preventDefault()
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value
    if (amtVal=== "" || amtVal<1){
        amtVal =1
        amount.value ="1"

    }

    

const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
let response = await  fetch(URL)
let data = await response.json()
let rate = data[toCurr.value.toLowerCase()]
console.log(rate)

// console.log(fromCurr.value,toCurr.value)
})
