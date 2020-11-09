import React, { Component } from 'react';
import Button from '@atlaskit/button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

class OAuthModal extends Component {
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
        <Button onClick={this.open}>Authentication</Button>

        <ModalTransition>
          {isOpen && (
            <Modal actions={actions} onClose={this.close} heading="OAuth Providers">
              <form className="container ui form">
                <button
                  value="google"
                  className="z-depth-5 center-align ui google plus button"
                  onClick={this.props.valueHandler}
                >
                  <i className="google icon" />
                  Google
                </button>
                <br />
                <br />
                <button
                  value="twitter"
                  className="z-depth-5 center-align ui twitter button"
                  onClick={this.props.valueHandler}
                >
                  <i className="twitter icon" /> Twitter
                </button>
              </form>
            </Modal>
          )}
        </ModalTransition>
      </div>
    );
  }
}

export default OAuthModal;
