import React from 'react';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        return (
            <>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
                {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
            </>
        );
    }
}
