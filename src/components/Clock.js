import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    handleClick = (locale) => {
        // console.log(locale);
        this.setState({ locale });
    };

    render() {
        const { date, locale } = this.state;
        // console.log(locale);
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick.bind(this, 'en-US')}>Click Hereqq</Button>
            </div>
        );
    }
}

export default Clock;
