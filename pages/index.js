import React from "react";
import Slider from "rc-slider";
import Layout from "./../components/layout";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 100,
      vals: [0, 0, 0, 0, 0],
      results: []
    };
    this.updatePercent = this.updatePercent.bind(this);
    this.calc = this.calc.bind(this);
  }

  updatePercent(val) {
    this.setState({ percent: val });
  }

  round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

  updateVal(idx, e) {
    const vals = this.state.vals;
    this.setState({
      vals: [
        ...vals.slice(0, idx).concat(e.currentTarget.value),
        ...vals.slice(idx + 1)
      ]
    });
  }

  calc() {
    const vals = this.state.vals;
    var i = 0;
    const newVals = this.state.vals.map((v, i) => {
      return round(v * this.state.percent / 100, 2);
    });
    this.setState({ vals: newVals });
  }

  render() {
    return (
      <Layout>
        <style global jsx>
          {`
            body {
              margin: 0;
              padding: 0;
              font-family: 'Montserrat', sans-serif;
              text-align: center;
            }
          `}
        </style>
        <h1>Super Duper Percentage Slider</h1>

        <div className="slider-wrapper">
          <Slider
            min={0}
            max={200}
            defaultValue={100}
            marks={{ 0: "0%", 100: "100%", 200: "200%" }}
            onChange={this.updatePercent}
          />
        </div>
        <div className="results">
          <h2>{`${this.state.percent}%`}</h2>

          <div className="suffix" />

          {this.state.vals.map((v, i) =>
            <div className="fields" key={`i${i}`}>
              <div className="src">
                <input
                  type="text"
                  defaultValue="0"
                  onChange={e => this.updateVal(i, e)}
                />
              </div>
              <div className="mid"> --> </div>
              <div className="res">
                <input
                  type="text"
                  value={this.round(
                    this.state.vals[i] * this.state.percent / 100,
                    2
                  )}
                  readOnly
                />
              </div>
            </div>
          )}
        </div>

        <style jsx>
          {`
            h1 {
            }
            .slider-wrapper {
              max-width: 400px;
              margin: 0 auto;
            }
            .results {
              max-width: 600px;
              margin: 0 auto;
            }
            .results h2 {
              padding-top: 40px;
            }
            .fields {
              display: flex;
            }
            input {
              border: 1px solid #ccc;
              font-size: 22px;
              padding: 4px;
              margin-bottom: 8px;
              border-radius: 4px;
            }
            .src {
              flex: 3;
            }
            .mid {
              flex: 1;
            }
            .res {
              flex: 3;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
