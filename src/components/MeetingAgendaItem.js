import React from 'react';
import { Button } from 'reactstrap';

import PropTypes from 'prop-types';

class MeetingAgendaItem extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: '10px' }} className="border-left">
        <div>{this.props.time}</div>
        <div>{this.props.title}</div>
        <div className="text-muted mb-2"><small>Sponsor</small></div>

        <div>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <img
                className="avatar avatar-sm"
                alt="avatar"
                src={this.props.sponsor}
              />
            </li>
          </ul>
        </div>

        <p>{this.props.body}</p>

        <div className="text-muted mb-2"><small>Notes</small></div>
        <Button outline color="primary">Add Notes</Button>{' '}
        <div className="text-muted mb-2"><small>Actions</small></div>
        <Button outline color="primary">Add Action</Button>{' '}
      </div>
    );
  }
}

MeetingAgendaItem.defaultProps = {
  time: '',
  title: '',
  body: '',
  sponsor: '',
};

MeetingAgendaItem.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  sponsor: PropTypes.string,
};

export default MeetingAgendaItem;
