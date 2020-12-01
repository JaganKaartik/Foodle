import React, { Component } from 'react';
import Button from '@atlaskit/button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import DishForm from '../foodtable/DishForm';

class AddModal extends Component {
  state = {
    isOpen: false
  };

  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const actions = [{ text: 'Close', onClick: this.close }];
    return (
      <div>
        <Button onClick={this.open}>Add Dish</Button>

        <ModalTransition>
          {isOpen && (
            <Modal actions={actions} onClose={this.close} heading="Add Dish!">
              <DishForm onAdd={this.props.onAdd} />
            </Modal>
          )}
        </ModalTransition>
      </div>
    );
  }
}

export default AddModal;
