const textInput = document.querySelector(".inputs input")
let checkBtn = document.querySelector(".inputs button")
let infoTxt = document.querySelector(".info-text")
let filterInput
checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("")
    infoTxt.style.display = "block"
    if(filterInput != reverseInput) {
        return  infoTxt.innerHTML = `No <span>${textInput.value}</span> isnt a palindrome`
    }
    infoTxt.innerHTML = `Yes <span>${textInput.value}</span> is a palindrome`
})
textInput.addEventListener("keyup", () => {
    filterInput =textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
       return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
    infoTxt.style.display = "none"
})