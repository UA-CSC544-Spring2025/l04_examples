////////////////////////////////////////////////////////////////
//
// This d3 example refactors the code from l03.js to redraw a
// similar plot using d3 calls in a second div
//
// Author: Joshua Levine
// Date: January 28, 2025
//
////////////////////////////////////////////////////////////////

let width = 400
let height = 400
let padding = 50

let svg3 = d3.select("#div3")
  .append("svg")
  .attr("width",width)
  .attr("height",height)

//Assuming l03.js was called to create the variable dataY


//set up scales for x, y, color

let cxScale = d3.scaleLinear()
                .domain([0,4])
                .range([padding,width-padding])

let cyScale = d3.scaleLinear()
                .domain([0,1])
                .range([padding,height-padding])
                //.range([height-padding,padding])  //this would flip the y-axis

let colorScale = d3.scaleLinear()
                   .domain([0,1])
                   .range(["red","blue"])
 


svg3.selectAll("circle")
    .data(dataY)
    .enter()
    .append("circle")
    .attr("cx",(d,i) => cxScale(i))
    .attr("cy", d => cyScale(d))
    .attr("r", 10)
    .attr("fill", d => colorScale(d))


//create an x-axis and transform it

let xAxis = d3.axisBottom(cxScale)

svg3.append("g")
    .attr("transform", `translate(0,${height-padding})`)
    .call(xAxis)


