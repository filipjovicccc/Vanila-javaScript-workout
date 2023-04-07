let value = document.querySelector('.value')

let btns = document.querySelectorAll(".btn")

let count = 0


btns.forEach(btn => {
      
    btn.addEventListener("click", (e) => {
           
         if(e.currentTarget.classList.value === "btn increase"){
            count++
         }
         else if(e.currentTarget.classList.value === "btn decrease"){
            count--
         }
         else{
            count = 0
         }
         value.innerHTML = count
         
    })
});

