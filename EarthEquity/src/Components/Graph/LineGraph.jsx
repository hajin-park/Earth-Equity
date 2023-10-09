import { useEffect, useRef } from "react";
import * as d3 from "d3";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const LineChart = ({ data, chosenLength }) => {
    
    const ref = useRef();

    useEffect(() => {
        // Parse the date strings into JavaScript Date objects
        data.forEach((d) => {
            d.date = new Date(d.date);
        });

        data.sort((a, b) => a.date - b.date); // Sort the data by date

        // Convert chosenLength to Date objects for easier comparison
        const startDate = new Date(
            chosenLength[0].startYear,
            monthNames.indexOf(chosenLength[0].startMonth),
            chosenLength[0].startDay || 1 // If day is null, default to the first day of the month
        );

        const endDate = new Date(
            chosenLength[1].endYear,
            monthNames.indexOf(chosenLength[1].endMonth) + 1, // To include the end month in the filter, add 1 to the month index
            chosenLength[1].endDay || 0 // If day is null, default to the last day of the previous month
        );

        // Filter the data array
        const filteredData = data.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate >= startDate && itemDate <= endDate;
        });

        const width = 1000;
        const height = 500;
        const marginTop = 20;
        const marginRight = 30;
        const marginBottom = 30;
        const marginLeft = 40;

        // Declare the x (horizontal position) scale.
        const x = d3.scaleUtc(
            d3.extent(filteredData, (d) => d.date),
            [marginLeft, width - marginRight]
        );

        // Declare the y (vertical position) scale.
        const y = d3.scaleLinear(
            [0, d3.max(filteredData, (d) => d.value)],
            [height - marginBottom, marginTop]
        );

        // Declare the line generator.
        const line = d3
            .line()
            .x((d) => x(d.date))
            .y((d) => y(d.value));

        // Create the SVG container.
        const svg = d3
            .create("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        // Add the x-axis.
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(
                d3
                    .axisBottom(x)
                    .ticks(width / 80)
                    .tickSizeOuter(0)
            );

        // Add the y-axis, remove the domain line, add grid lines and a label.
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(height / 40))
            .call((g) => g.select(".domain").remove())
            .call((g) =>
                g
                    .selectAll(".tick line")
                    .clone()
                    .attr("x2", width - marginLeft - marginRight)
                    .attr("stroke-opacity", 0.1)
            )
            .call((g) =>
                g
                    .append("text")
                    .attr("x", -marginLeft)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .text("Value")
            );

        // Append a path for the line.
        const path = svg
            .append("path")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line(filteredData));

        const totalLength = path.node().getTotalLength();

        path.attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(7000)
            .attr("stroke-dashoffset", 0);

        ref.current.innerHTML = "";
        ref.current.appendChild(svg.node());
    }, [data]);

    return <div ref={ref}></div>;
};

export default LineChart;
