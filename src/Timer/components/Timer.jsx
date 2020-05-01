import React from "react";
import Interval from "./Interval";
import Onnect from "./сonnect";

class TimerComponent extends React.Component {
    state = {
        currentTime: 0,
        timerId: false,

    }

    render() {

        return (
            <div>
                <Interval/>
                <div>
                    Секундомер: {this.state.currentTime} сек.
                </div>
                <div>
                    <button disabled={!this.state.timerId ? false : true} onClick={this.handleStart}>Старт</button>
                    <button onClick={this.handleStop}>Стоп</button>
                </div>

                <div>
                    <h3>Какие исправления я внес в данный Секундомер</h3>
                    <div>В createStore добавил строку "dispatch(type: INSTALL)" чтобы добавить начальный state
                    </div>
                    <div>
                        В HOOK connect изменил метод на componentDidMount() чтобы выполнить метод subscribe
                    </div>
                    <div>
                        В Interval компоненте поменял местами методы mapStateToProps with mapDispathToprops
                    </div>
                    <div>Так же в Interval компоненте добавил проверку this.props.currentInterval > 1 чтобы не показывать кнопку
                        если значения интервала меньше 1
                    </div>
                    <div>
                        В reducer добавил InitialState
                    </div>
                    <div>
                        В компоненте Timer:
                        <div> -методы handleStart, handleStop были переведены в стрелочные функции чтобы получить доступ
                            this
                        </div>
                        <div>-поменял функцию SetTimeout на setInterval</div>
                        <div>-добавил clearInterval в метод handleStop</div>
                        <div>
                            -добавил метод componentDidUpdate, чтобы при изменении интервала счетчик обнулялся
                        </div>
                        <div>
                            Кнопка старт если счетчик включен принимает состояние disabled
                        </div>
                        <a href="https://github.com/dembit/counter">Ссылка на код (репозиторий)</a>
                    </div>
                </div>


            </div>
        )
    }

    // при изменении интервала секундамер обнуляется
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentInterval != this.props.currentInterval) {
            this.handleStop();
        }

    }

    //методы handleStart, handleStop  были переведены в стрелочные функции чтобы получить доступ this
    //поменял функцию на setInterval
    //добавил clearInterval в метод handleStop

    handleStart = () => {

        let timerIdNew = setInterval(() => this.setState({
            currentTime: this.state.currentTime + this.props.currentInterval,
        }), this.props.currentInterval * 1000)
        this.setState({
            timerId: timerIdNew
        })
    }

    handleStop = () => {
        clearInterval(this.state.timerId);
        this.setState({
            timerId: null
        })
        this.setState({currentTime: 0})
    }
}

const Timer = Onnect(state => ({
    currentInterval: state,
}), () => {
})(TimerComponent)

export default Timer;