import React from 'react';

import { Card, CardBody } from 'reactstrap'

import MeetingDetailedInfo from '../components/MeetingDetailedInfo';
import MeetingAgenda from '../components/MeetingAgenda';
import MeetingComments from '../components/MeetingComments';

const Meeting = ({ match }) => (
  <div>
    <Card>
      <CardBody>
      <MeetingDetailedInfo id={match.params.id} />
    </CardBody>
    </Card>
    <Card className="mb-4">
      <CardBody>
      <MeetingAgenda id={match.params.id} />
    </CardBody>
    </Card>
    <Card>
      <CardBody>
      <MeetingComments id={match.params.id} />
    </CardBody>
    </Card>
  </div>
);

export default Meeting;
