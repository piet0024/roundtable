import React from 'react';

import {
  Row, Col,
  ListGroup
} from 'reactstrap';

import MeetingPreview from '../components/MeetingPreview';

const style = {
  width: '100%',
};

export default class UpcomingMeetings extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <h1 className="sr-only">Upcoming Meetings</h1>
        </Row>
        <Row>
          <Col className="bg-primary text-white d-flex justify-content-start">
            <div className="mr-3">
              <div>14</div>
              <div>June</div>
            </div>
            <h2>Today</h2>
          </Col>
          <ListGroup style={style}>
            <MeetingPreview
              id="35"
              title="This is the Title"
              time="1:00 - 2:00"
              location="the moon"
            />
            <MeetingPreview
              id="30"
              title="Oh my goodness"
              time="1:00 - 2:00"
              location="the moon"
            />
          </ListGroup>
        </Row>
        <Row>
          <Col className="bg-primary text-white d-flex justify-content-start">
            <div className="mr-3">
              <div>15</div>
              <div>June</div>
            </div>
            <h2>Tomorrow</h2>
          </Col>
          <ListGroup style={style}>
            <MeetingPreview
              id="30"
              title="This is the Title"
              time="1:00 - 2:00"
              location="the moon"
            />
            <MeetingPreview
              id="30"
              title="This is the Title"
              time="1:00 - 2:00"
              location="the moon"
            />
          </ListGroup>
        </Row>

      </div>
    );
  }
}
