class Counter extends React.Component {
    // Challenge: 1
    // Create three methods: handleAddOne, HandleMinusOne, HandleReset
    // Use console.log to print method name
    // Wire up onClick & bind the constructor  
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne() {
        console.log('handleAddOne');
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
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleMinusOne}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));