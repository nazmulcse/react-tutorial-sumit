import React from 'react';

const withCounter = (OrgninalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return <OrgninalComponent count={count} incrementCount={this.incrementCount} />;
        }
    }
    return NewComponent;
};

export default withCounter;
