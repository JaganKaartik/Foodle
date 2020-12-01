import React, { Component } from 'react';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

class FoodModal extends Component {
  close = () => this.props.onClose();

  render() {
    const actions = [{ text: 'Close', onClick: this.close }];

    return (
      <div>
        <ModalTransition>
          {
            <Modal actions={actions} onClose={this.close} heading="Search Info">
              <table>
                <thead>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.dish.name}</td>
                    <td>{this.props.dish.type}</td>
                    <td>{this.props.dish.price}</td>
                  </tr>
                </tbody>
              </table>
            </Modal>
          }
        </ModalTransition>
      </div>
    );
  }
}

export default FoodModal;
