// Common Questions: If you have multiple pieces of state on your component, you only have to update the ones you want to change.

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }
    
    // Methods
    handleAddOne() {
        this.setState((prevState) => { 
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        // Challenge
        // Call this.setState decrement the count by 1.
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        console.log('handleReset')            
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleMinusOne}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));