const data = [
    {shelter: 'shelter1', dogs: 30},
    {shelter: 'shelter2', dogs: 30},
    {shelter: 'shelter3', dogs: 30}
]

const width = 800;
const height = 400;
const margin ={top:50, bottom:50, left:50, right:50};

const svg = d3.select('#d3-container')
.append('svg')
.attr('height', height - margin. top - margin.bottom)
.attr('width', width - margin.left - margin.right)
.attr('viewBox', [0,0, width, height])

const x = d3.scaleBand()
.domain(d3.range(data.length))
.range([margin.left, width - margin.right])
.padding(0.1)

const y = d3.scaleLinear()
.domain([0,100])
.range([height - margin.bottom, margin.top])

svg
.append('g')
.attr('fill', 'royalblue')
.selectAll('rect')
.data(data.sort((a,b) => d3.descending(a.dogs, b.dogs)))
.join('rect')
 .attr('x', (d, i) => x(i))
 .attr('y', (d) => y(d.score))
 .attr('height', d => y(0) - y(d.score))
 .attr('width', x.bandwidth())

