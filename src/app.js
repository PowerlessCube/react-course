class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subTitle = "Put Your life in the hands of a computer.";
        const options = ["Thing One", "Thing Two", "Thing Four"];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <RemoveAll />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    };
}

class Action extends React.Component {
    //Class Method
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

// Add Remove All button
class RemoveAll extends React.Component {
    handleRemoveAll() {
        // Setup handleRemoveAll -> alert some message
        alert('handleRemoveAll');
    }

    render() {
        // Setup onClick to fire the method
        return <button onClick={this.handleRemoveAll}>Remove All</button> 
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.optionText}</p>
        );
    };
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));