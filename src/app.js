class IndecisionApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing Three']
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    // handlePick - pass down to Action and seyup onClick- bind here
    // randomly pick an option and alert it.
    // remove old handlePick method from component.

    render() {
        const title = "Indecision App";
        const subTitle = "Put Your life in the hands of a computer.";

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                />
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
                <button 
                    disabled={!this.props.hasOptions} 
                    onClick={this.handlePick}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button> 
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
    handleAddOption(e) {
        e.preventDefault(); // Stop page refresh.
        
        const option = e.target.elements.option.value.trim();
        
        if (option) {
            alert(option);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));