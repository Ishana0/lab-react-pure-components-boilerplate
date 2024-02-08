import React, { PureComponent } from "react"

class PureCounterComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            toggleStatus: false
        };
    }
    handleInc = () => {
        if (this.state.toggleStatus) {
            this.setState({ ...this.state, count: this.state.count + 1 });
        } else {
            this.setState({ ...this.state, count: this.state.count });
        }
    };

    handelToggle = () => {
        this.setState({ ...this.state, toggleStatus: !this.state.toggleStatus });
    };

    render() {
        console.log("This is Pure Component", this.state.toggleStatus);
        return <>
            <div>
                <h2>Pure Component</h2>
                <h4>{this.state.count}</h4>
            </div>
            <div>
                <button onClick={this.handelToggle}>Set Toggle</button>
                <button onClick={this.handleInc}>Counter</button>
            </div>

        </>;
    }
}
export default PureCounterComponent;