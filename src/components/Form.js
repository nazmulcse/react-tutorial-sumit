import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'Javascript',
        description: 'Javascript is Scripting language',
        library: 'React',
        isAwesome: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                description: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { title, description, library, isAwesome } = this.state;
        console.log(title, description, library, isAwesome);
    };

    render() {
        const { title, description, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="description" value={description} onChange={this.handleChange} />
                    <br />
                    <br />
                    <select name="select" value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
