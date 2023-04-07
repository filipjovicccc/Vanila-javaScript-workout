//Objektivno orijentisano programiranje

// class Car {
//     constructor(model, name){
//         this.model = model
//         this.name = name
//     }

//     start(){
//         console.log(`This car name ${this.name} and model ${this.model}`)
//     }
// }

// const car = new Car("Cabriolete", "Toyota")

// car.start()

//acinhrono programiranje
// fetch("https://636b84dc7f47ef51e132b2ab.mockapi.io/Rent")
//      .then(
//     res => res.json()
//     .then(data => console.log(data))
// )
// .catch(error => {
//     console.error(error)
// })
// myDiv.addClass("highlight")

//         myDiv.click(function(){
//             alert("The div was clicked")
//         })

//iteratori i generatori

// function* generateNumbers(){
//     yield 1;
//     yield 2;
//     yield 3;

// };

// const numbers = generateNumbers()

// console.log(numbers.next().value)
// console.log(numbers.next().value)
// console.log(numbers.next().value)

// function* generateNumbers(){
//     yield 1;
//     yield 2;
//     yield 3;
// };

// const numbers = generateNumbers()

// console.log(numbers.next().value)
// console.log(numbers.next().value)
// console.log(numbers.next().value)

// localStorage.setItem("name", "Michael Jordan")

// const name = localStorage.getItem("name")

// console.log(name)

// function SetCookie(cname, cvalue, exdays){
//     let d = new Date();

//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 *1000))

//     var expires = "expires=" + d.toUTCString()
//     document.cookie = cname + "=" + cvalue + "; path=/" + expires + ";";
// }

// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i = 0; i < ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
//   window.addEventListener("load", function() {
//     SetCookie("cookieName", "cookieValue", 30);
//     let cookieValue = getCookie("cookieName");
//     console.log(cookieValue);
//   });

  
//js-cookie library da se simplifikuje proces dobijanja kukija

// Cookies.set("name", "value", {expires:7})
  
//   const value = Cookies.get("name")

// const numsInput = [7, 8,2, 12, 25, 52, 13, 4,]


// const numsOutput  = numsInput.filter((item) => item % 2 === 0).sort((a,b)=>a-b) 

// console.log(numsOutput)

  


