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

    svg.selectAll('path')
      .data([data])
      .join('path')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data, width, height]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default Graph;