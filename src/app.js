console.log("Merhaba kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30 

let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11  //Bu hatalı bir kod bloğudur.

console.log(euroDun)

//array = dizi 
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Özel Konut Kredisi"]
console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++) {
    console.log("<li>"+konutKredileri+"</li>")
    
}
console.log("</ul>")
 

console.log(konutKredileri)