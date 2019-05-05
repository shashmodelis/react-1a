import React, {Component} from 'react';
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 5, y: 5 }
  ];


class PieChart extends Component {
    render() {
        return (
            <VictoryChart height={200} width={800}
                theme={VictoryTheme.material}
            >
                <VictoryArea
                    style={{ data: { fill: "#c43a31" } }}
                    data={data}
                />
            </VictoryChart>
        )
    }
}

export default PieChart;
