import React from 'react';
import PropTypes from 'prop-types';

import { ListGroupItem, ListGroupItemHeading } from 'reactstrap';

export default class MeetingPreview extends React.Component {
  render() {
    return (
      <ListGroupItem className="list-group-item-accent-success" tag="a" href={`/m/${this.props.id}`} action >
        <div>
          {this.props.time}
        </div>
        <ListGroupItemHeading>
          {this.props.title}
        </ListGroupItemHeading>
        <div className="text-muted mb-2">
          <small>{this.props.location}</small>
        </div>
        <div>
          <div>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <img
                  className="avatar avatar-sm"
                  alt="avatar"
                  src="https://api.adorable.io/avatars/285/abott@adorable.png"
                />
              </li>
            </ul>
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

MeetingPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
