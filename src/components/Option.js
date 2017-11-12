import React from 'react';

export default Option = (props) => (
    <div>
        <p>{props.optionText}</p>
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);