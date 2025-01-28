////////////////////////////////////////////////////////////////
//
// This d3 example refactors the code from l03.js to redraw a
// similar plot using d3 calls in a second div
//
// Author: Joshua Levine
// Date: January 28, 2025
//
////////////////////////////////////////////////////////////////


/*
//Here are some examples of lines I ran in the browser toinspect the
//output of l03.js using d3.  You could cut-and-paste these into the
//browser yourself

//Note this will get ALL circles, not just the ones in div1
let circles = d3.selectAll("circle")
//All circles from div1
let circles = d3.select("#div1").selectAll("circles")

//Change radius to 20
circles.attr("r",20)
//Random radius per circle
circles.attr("r",() => Math.random()*10)
//All circles, same (random) radius
circles.attr("r",Math.random()*10)

//d3.select(this) returns the currently selected object
circles.attr("r", function() {
  console.log(d3.select(this));
})
//change the color to blue, over 5 seconds
circles.transition().duration(5000).attr("fill", "blue")
circles.transition().duration(5000).attr("r", 30)
//change both at the same time
circles.transition()
    .duration(5000)
    .attr("fill", "green")
    .attr("r", 5)
*/


let svg2 = d3.select("#div2")
  .append("svg")
  .attr("width",400)
  .attr("height",400)

//Assuming l03.js was called to create the variable dataY

svg2.selectAll("circle")
    .data(dataY)
    .enter()
    .append("circle")
    .attr("cx",(d,i) => (i+1)*50)
    .attr("cy", d => Math.round(100+200*d))
    //.attr("cy", d => 400 - Math.round(100+200*d)) //flip y axis
    .attr("r", 10)
    .attr("fill", "black")


//transition example
svg2.selectAll("circle")
    .transition()
    .delay((d,i) => i*500) //delay circles individually
    .duration(2500)
    .attr("r", d=>d*50)
