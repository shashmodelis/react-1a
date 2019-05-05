import React, {Component} from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
    {buckets:2,count:13}, 
    {buckets:3,count:93}, 
    {buckets:4,count:181},
    {buckets:5,count:98}, 
    {buckets:6,count:27}, 
    {buckets:7,count:12}, 
    {buckets:8,count:3},  
    {buckets:9,count:1}
];


class BarChart extends Component {
render() {
    return (
    <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
        theme={VictoryTheme.material}
    >
        <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        />
        <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        />
        <VictoryBar
        data={data}
        x="buckets"
        y="count"
        colorScale="cool"
        />
    </VictoryChart>
    )
    }
}

export default BarChart;
