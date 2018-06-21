import React from 'react';

import MeetingDetailedInfo from '../components/MeetingDetailedInfo';
import MeetingAgenda from '../components/MeetingAgenda';
import MeetingComments from '../components/MeetingComments';

const Meeting = ({ match }) => (
  <div>
    <div>
      <MeetingDetailedInfo id={match.params.id} />
    </div>
    <div className="mb-4">
      <MeetingAgenda id={match.params.id} />
    </div>
    <div>
      <MeetingComments id={match.params.id} />
    </div>
  </div>
);

export default Meeting;
