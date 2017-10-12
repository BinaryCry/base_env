import React, { Component }  from 'react';
import { render } from 'react-dom'

class TempInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <p>Input in {this.props.scale}: <input onChange={this.props.onTeempChange} type="text" value={this.props.currentTemp}/></p>
    }
}
class BoilVerdict extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <p>
                <b>{this.props.substance} is { this.props.temp >= this.props.boilTemp ? '' : 'not' } boiled</b>
            </p>
        )
    }
}
class Boil extends Component {
    constructor(props) {
        super(props);
        this.fahrenheitState = this.fahrenheitState.bind(this);
        this.celsiumState = this.celsiumState.bind(this);
        this.boilTemps = {
            water: {
                c: 100,
                f: 212
            }
        };
        this.scales = {
            f: 'Fahrenheit',
            c: 'Celsium'
        };
        this.initialState = {
            f_degr: '',
            c_degr: ''
        };
        this.state = this.initialState;
    }
    fahrenheitState(syntEvent) {
        let value = syntEvent.target.value;
        if( value == '' ) {
            this.setState(this.initialState);
            return false;
        }
        let  c_degr = Math.round(((value - 32) * 5 / 9) * 10) / 10;
        this.setState(
            {
                f_degr: value,
                c_degr: !c_degr ? 'incorrect' : c_degr
            }
        );
    }
    celsiumState(syntEvent) {
        let value = syntEvent.target.value;
        if( value == '' ) {
            this.setState(this.initialState);
            return false;
        }
        let f_degr = Math.round(((value * 9 / 5) + 32) * 10) / 10;
        this.setState(
            {
                c_degr: value,
                f_degr: !f_degr ? 'incorrect' : f_degr
            }
        );
    }
    render() {
        return(
            <div>
                <TempInput scale={this.scales.c} onTeempChange={this.celsiumState} currentTemp={this.state.c_degr} />
                <TempInput scale={this.scales.f} onTeempChange={this.fahrenheitState} currentTemp={this.state.f_degr} />
                <BoilVerdict temp={this.state.c_degr} substance={this.props.substance} boilTemp={this.boilTemps[this.props.substance].c} />
            </div>
        )
    }
}

render( <Boil substance="water" />, document.getElementById('root') );
