import React from 'react';

export default Option = (props) => {
    return (
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
}