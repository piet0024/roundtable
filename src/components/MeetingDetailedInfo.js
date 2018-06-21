import React from 'react';
import PropTypes from 'prop-types';

export default class MeetingDetailedInfo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="h2"> Meeting ID here: {this.props.id}</h1>
          <div>Monday June 18th 2018</div>
          <div>1:00 - 2:00</div>
          <div className="text-muted mb-2"><small>Location 6B</small></div>
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
        </div>
        <div>
          <h2 className="h3">Objective</h2>
          <p>Body information</p>
        </div>
      </div>
    );
  }
}

MeetingDetailedInfo.propTypes = {
  id: PropTypes.string.isRequired,
};
