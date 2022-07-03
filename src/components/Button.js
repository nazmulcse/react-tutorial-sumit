import React from 'react';

class Button extends React.Component {
    render() {
        const { change, locale, text, show } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {text}
                </button>
                {show && <p>Hello</p>}
            </div>
        );
    }
}
export default Button;
