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
                  <button
                    type="button"
                    className="ui green basic button"
                    onClick={this.props.handler}
                  >
                    <i className="save icon" />
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ui olive basic button"
                    onClick={this.props.handler}
                  >
                    <i className="edit icon" />
                    Edit
                  </button>
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
                <button
                  type="button"
                  className="ui orange basic button"
                  onClick={this.props.click.bind(this, this.props.foodid, 'delete')}
                >
                  <i className="ban icon" />
                  Delete
                </button>
              </div>
            </Modal>
          )}
        </ModalTransition>
      </div>
    );
  }
}

export default OperationsModal;
