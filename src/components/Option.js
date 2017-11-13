import React from 'react';

export default Option = (props) => (
    <div>
        <p>{props.optionText}</p>
        <button 
            className='button button--link'
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);