import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Graph = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d)])
      .range([height, 0]);

    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d));

    svg.selectAll('*').remove(); // Clear previous elements

    // Draw the line
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('d', line);

    // Draw X axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(data.length).tickFormat(d3.format('d')));

    // Draw Y axis
    svg.append('g')
      .call(d3.axisLeft(yScale));

    // X axis label
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height + 40)
      .style('text-anchor', 'middle')
      .text('X Axis Label');

    // Y axis label
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -40)
      .style('text-anchor', 'middle')
      .text('Y Axis Label');
  }, [data, width, height]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default Graph;
