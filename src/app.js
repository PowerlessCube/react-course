class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subTitle = "Put Your life in the hands of a computer.";
        const options = ["Thing One", "Thing Two", "Thing Four"];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}
//Challenge 2: Render new p tag for each option (set text, set key).
class Options extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.options.map((option) => <p key={option}>{option}</p>)
            }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option component here.</li>
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