import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          options={{
            legend: {
              display: this.props.displayLegend,
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
