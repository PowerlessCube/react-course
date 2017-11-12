import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// Example of passing Children to Components
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}

// Some third party libraries use this pattern.
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
), document.getElementById('app'));
