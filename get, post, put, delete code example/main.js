//GET metoda//or read from crud
fetch("https://636b84dc7f47ef51e132b2ab.mockapi.io/Rent")
.then(response => response.json()).then(
    data=>console.log(data)
) .catch(error => console.error(error));

//POST metoda//ili create from crud

fetch("https://636b84dc7f47ef51e132b2ab.mockapi.io/Rent",{
   method: "POST",
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify({
      startingRent: 100,
      effectiveRent: 100
   })
 
}).then(res => res.json()).then(data=> console.log(data))

//PUT ili update u crudu

fetch("https://636b84dc7f47ef51e132b2ab.mockapi.io/Rent",{
   method: "PUT",
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify({
      startingRent: 100,
      effectiveRent: 100
   })
 
}).then(res => res.json()).then(data=> console.log(data))

//DELETE ili delete u crudu

fetch("https://636b84dc7f47ef51e132b2ab.mockapi.io/Rent", {
    method: "DELETE",

}).then(res => res.json()).then(data=> console.log(data))


