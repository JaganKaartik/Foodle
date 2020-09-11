import React, { Component } from 'react';
import Button from '@atlaskit/button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

class OAuthModal extends Component {

    state = {
        isOpen: false
    }

    open = () => this.setState({ isOpen: true });
    close = () => this.setState({ isOpen: false });

    render() {
        const { isOpen } = this.state;
        const actions = [
            { text: 'Close', onClick: this.close },
        ];
        return (
            <div>
                <Button onClick={this.open}>Authentication</Button>

                <ModalTransition>
                    {isOpen && (
                        <Modal actions={actions} onClose={this.close} heading="OAuth Providers">
                            <form className="container ui form">
                                <button value="github" className="z-depth-5 center-align ui primary button" onClick={this.valueHandler}>
                                    <i className="google icon" />Google
                                </button>
                                <br />
                                <br />
                                <button value="google" className="z-depth-5 center-align ui secondary button" onClick={this.valueHandler}>
                                    <i className="github icon" /> Github
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