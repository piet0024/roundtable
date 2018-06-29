import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

import PropTypes from 'prop-types';

import MeetingAgendaItem from './MeetingAgendaItem';

export default class MeetingAgenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <h2 className="h3">Agenda for meeting {this.props.id}</h2>
        <div className="agenda-item-holder mb-3">
          <MeetingAgendaItem
            time="1:00 - 1:15"
            title="It's time to stop 9gag links"
            body="Body of the thing."
          />
        </div>

        <div>
          <Button color="primary" block onClick={this.toggle}>Add Agenda Item</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody>
              <h2>Add Agenda Item</h2>
            </ModalBody>  
          </Modal>
        </div>  
        
      </div>
    );
  }
}

MeetingAgenda.propTypes = {
  id: PropTypes.string.isRequired,
};
