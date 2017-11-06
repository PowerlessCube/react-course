class Counter extends React.Component {
    render() {
        // Challenge: 1
        // Create three methods: handleAddOne, HandleMinusOne, HandleReset
        // Use console.log to print method name
        // Wire up onClick & bind the constructor   

        return (
            <div>
                <h1>Count: </h1>
                <button >+</button>
                <button >-</button>
                <button >reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));