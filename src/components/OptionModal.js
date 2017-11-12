// using documentation we can implement the following
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button>OK</button>
    </Modal>
);

export default OptionModal;

/* 
Challenge 2 
1. Create a new event handle in IndecisionApp that clears selectedOption state
2. Pass that into OptionModal
3. Call it on button click
*/
