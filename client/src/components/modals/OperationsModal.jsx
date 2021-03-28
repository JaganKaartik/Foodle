import React, { Component } from 'react';
import Button from '@atlaskit/button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

class OperationsModal extends Component {
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
        <Button onClick={this.open}>Operations</Button>

        <ModalTransition>
          {isOpen && (
            <Modal actions={actions} onClose={this.close} heading="Dish Operations!">
              <div className="item">
                {this.props.isEditable ? (
                  <Button onClick={this.props.handler}>
                    <i className="save icon" />
                    Save
                  </Button>
                ) : (
                  <Button onClick={this.props.handler}>
                    <i className="edit icon" />
                    Edit
                  </Button>
                )}
              </div>

              {this.props.isEditable ? (
                <input
                  type="text"
                  placeholder="price to update"
                  name="price"
                  onChange={this.props.edit.bind(this)}
                  value={this.props.datavalue}
                />
              ) : (
                <br />
              )}

              <div className="item">
                <Button onClick={this.props.click.bind(this, this.props.foodid, 'delete')}>
                  <i className="ban icon" />
                  Delete
                </Button>
              </div>
            </Modal>
          )}
        </ModalTransition>
      </div>
    );
  }
}

export default OperationsModal;
