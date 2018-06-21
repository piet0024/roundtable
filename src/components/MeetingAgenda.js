import React from 'react';
import { Button } from 'reactstrap';

import PropTypes from 'prop-types';

import MeetingAgendaItem from './MeetingAgendaItem';

export default class MeetingAgenda extends React.Component {
  render() {
    return (
      <div>
        <h2 className="h3">Agenda for meeting {this.props.id}</h2>
        <div className="agenda-item-holder">
          <MeetingAgendaItem
            time="1:00 - 1:15"
            title="It's time to stop 9gag links"
            body="Body of the thing."
          />
        </div>
        <Button color="primary" block>Add Agenda Item</Button>
      </div>
    );
  }
}

MeetingAgenda.propTypes = {
  id: PropTypes.string.isRequired,
};
