import React from 'react';
import ReactDOM from 'react-dom';
import Provider from "./Timer/components/Provider";
import Timer from "./Timer/components/Timer";
import createStore from "./Timer/store/store";
import {reducer} from "./Timer/store/reducer";


// Slomux — упрощённая, сломанная реализация Flux.
// Перед вами небольшое приложение, написанное на React + Slomux.
// Это нерабочий секундомер с настройкой интервала обновления.

// Исправьте ошибки и потенциально проблемный код, почините приложение и прокомментируйте своё решение.

// При нажатии на "старт" должен запускаться секундомер и через заданный интервал времени увеличивать свое значение на значение интервала
// При нажатии на "стоп" секундомер должен останавливаться и сбрасывать свое значение


// init
let store = createStore(reducer)
window.st = store


ReactDOM.render(
    <Provider store={store}>
        <Timer />
    </Provider>,
    document.getElementById('root')
)
