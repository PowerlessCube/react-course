// using documentation we can implement the following
import React from 'react';
import Modal from 'react-modal';

// onRequestClose - closes modal when esc or click out side modal happens.
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>OK</button>
    </Modal>
);

export default OptionModal;