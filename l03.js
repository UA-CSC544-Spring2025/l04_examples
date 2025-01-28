////////////////////////////////////////////////////////////////
//
// This javascript example shows a very simple scatterplot 
// using Javascript calls based on material from L03
//
// Author: Joshua Levine
// Date: January 28, 2025
//
////////////////////////////////////////////////////////////////

let svg1 = document.createElementNS("http://www.w3.org/2000/svg","svg")
document.querySelector("#div1").appendChild(svg1)

svg1.setAttributeNS(null,"width", 400)
svg1.setAttributeNS(null,"height", 400)


let dataX = [1,2,3,4,5]
let dataY = dataX.map(x => Math.random())


for (let i=0; i<dataX.length; i++) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg","circle")
  circle.setAttributeNS(null,"cx",50*dataX[i])
  circle.setAttributeNS(null,"cy",Math.round(100+200*dataY[i]))
  circle.setAttributeNS(null,"r",10)
  circle.setAttributeNS(null,"fill","black")

  svg1.appendChild(circle)
}
