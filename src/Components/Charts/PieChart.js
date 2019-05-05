import React, {Component} from 'react';
import { VictoryPie, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
    {quarter: '% complete', earnings: "90"},
    {quarter: '', earnings: "10"},
    
];


class PieChart extends Component {
render() {
    return (
        <VictoryPie
        data={data}
        x="quarter"
        y="earnings"
        colorScale="cool"
        innerRadius={90}
        />
    )
    }
}

export default PieChart;
