import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Graph = ({ data, width, height, xAxisTitle, yAxisTitle }) => {
    const ref = useRef();

    useEffect(() => {
        const margin = {top: 20, right: 30, bottom: 50, left: 60};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(ref.current)
            .attr('width', width)
            .attr('height', height);

        svg.selectAll("*").remove();  // Clear previous data

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range([0, innerWidth]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([innerHeight, 0]);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y));

        const path = g.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1.5)
            .attr('d', line);

        const totalLength = path.node().getTotalLength();

        path
            .attr('stroke-dasharray', totalLength + " " + totalLength)
            .attr('stroke-dashoffset', totalLength)
            .transition()
            .duration(5000)
            .attr('stroke-dashoffset', 0);

        g.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale))
            .append('text')
            .attr('class', 'axis-title')
            .attr('x', innerWidth / 2)
            .attr('y', 40)
            .attr('fill', 'black')
            .style('text-anchor', 'middle')
            .text(xAxisTitle);

        g.append('g')
            .call(d3.axisLeft(yScale))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', -50)
            .attr('x', -innerHeight / 2)
            .attr('fill', 'black')
            .style('text-anchor', 'middle')
            .text(yAxisTitle);
    }, [data, height, width, xAxisTitle, yAxisTitle]);

    return (
        <svg ref={ref}></svg>
    );
};

export default Graph;
