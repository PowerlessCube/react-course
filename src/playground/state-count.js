class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // 1. Setup Default state object
        this.state = {
            count: 0
        };
    }
    
    // Methods
    handleAddOne() {
        console.log('handleAddOne');
        // 3. Change state on event
        this.setState((prevState) => { // prevState - state b4 change.
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        console.log('handleMinusOne')
    }

    handleReset() {
        console.log('handleReset')            
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count /* 2. Component rendered with default state */}</h1>
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleMinusOne}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));