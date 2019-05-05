import React, {Component} from 'react';
import { VictoryLine, VictoryScatter, VictoryChart } from 'victory';

const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 5, y: 5 }
  ];

class LineChart extends Component {
    render() {
        return (
            <VictoryChart height={200} width={200}>
            <VictoryLine
                interpolation="cardinal" data={data}
                style={{ data: { stroke: "#c43a31" } }}
            />
            <VictoryScatter data={data}
                style={{ data: { fill: "#c43a31" } }}
            />
            </VictoryChart>
        )
    }
}

export default LineChart;
