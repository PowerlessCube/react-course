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

class RemoveAll extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll');
    }

    render() {
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

//Challenge 2:
// 1. Setup the form with text inpur and submit button
// 2. Wire up onSubmit.
// 3. handleAddOption -> fetch the value typed -> if value, then alert.

class AddOption extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value;
        
        if (option) {
            alert(option);
            e.target.elements.option.value = ''; //Clears input
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));