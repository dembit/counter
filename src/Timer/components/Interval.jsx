import React from "react";
import Onnect from "./сonnect";
import {changeInterval} from "../store/reducer";

class IntervalComponent extends React.Component {
    render() {
        return (
            <div>
                <span>Интервал обновления секундомера: {this.props.currentInterval} сек.</span>
                <span>
          {this.props.currentInterval > 1 && <button onClick={() => this.props.changeInterval(-1)}>-</button>}
          <button onClick={() => this.props.changeInterval(1)}>+</button>
        </span>
            </div>
        )
    }
}

const Interval =  Onnect(state => ({
        currentInterval: state,
    }), dispatch => ({
    changeInterval: value => dispatch(changeInterval(value)),
}))(IntervalComponent)

export default Interval;