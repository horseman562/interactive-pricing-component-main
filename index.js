let pageViews = document.querySelector(".views");

let amount = document.querySelector(".amount")

let range = document.querySelector(".slider2")

let togglebilling = document.querySelector("#billing")
 
range.oninput = calculateValue;
togglebilling.oninput = calculateValue;
 

  let toggle =  togglebilling.onclick = function() {
     if (togglebilling.checked) {
         return 1
     } else return 0
 } 

  
function calculateValue() {
    
    if (range.value ===  "1") {
         

        pageViews.innerHTML = "20K"

       /* A */
        
      /*   costText.innerHTML = "$" +8.00 * (1-(yearly()*0.25)) + ".00 "; */
        amount.innerHTML =  `$${8.00 * (1-(toggle()*0.25))}.00` 
        
         
    }

    if (range.value ===  "2") {
         
        pageViews.innerHTML = "50K"
        
        amount.innerHTML =  `$${12.00 * (1-(toggle()*0.25))}.00`
         
    }

    if (range.value ===  "3") {
         
        pageViews.innerHTML = "100K"
        
        amount.innerHTML =  `$${16.00 * (1-(toggle()*0.25))}.00`
         
    }

    if (range.value ===  "4") {
         
        pageViews.innerHTML = "500K"
         
        amount.innerHTML =  `$${24.00 * (1-(toggle()*0.25))}.00`
         
    }

    if (range.value ===  "5") {
         
        pageViews.innerHTML = "1M"
         
        amount.innerHTML =  `$${36.00 * (1-(toggle()*0.25))}.00`
          
    }


}



 