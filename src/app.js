class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put Your life in the hands of a computer.</h2>
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

// Options -> Options component here

// AddOption -> AddOption component here

const jsx = (
    <div>
        <Header />
        <Action />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));