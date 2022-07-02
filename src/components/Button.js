import React from 'react';

class Button extends React.Component {
    render() {
        // console.log('Button is rendering');
        const { change } = this.props;
        return (
            <button type="button" onClick={change}>
                Click here
            </button>
        );
    }
}
export default Button;
