import React from 'react';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    handleClick = () => {
        this.setState({ locale: 'en-US' });
    };

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type="button" onClick={this.handleClick}>
                    Click here
                </button>
            </div>
        );
    }
}

export default Clock;
