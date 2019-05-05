import React, {Component} from 'react';
import Chart from "react-apexcharts";


class PieChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
                legend: {
                    show: false,
                },
                theme: {
                    mode: 'light', 
                    palette: 'palette3',
                }    
            },
            series: [44, 55, 13, 33],
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                labels={this.state.labels}
                type="pie"
            />
        );
    }
}

export default PieChart;
