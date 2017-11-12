// using documentation we can implement the following
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h3>{props.selectedOption}</h3>
    </Modal>
);

export default OptionModal;