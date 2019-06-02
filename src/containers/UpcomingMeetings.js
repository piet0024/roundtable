import React from 'react';

import {
  Row, Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody
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

        <Card className="" style={style}>
          <ListGroup flush >
            <ListGroupItem className="bg-primary text-white text-center">
              <h2 className="h5">Today</h2>
            </ListGroupItem>
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
        </Card>

        <Card className="" style={style}>
          <ListGroup flush >
            <ListGroupItem className="bg-primary text-white text-center">
              <h2 className="h5">Tomorrow</h2>
            </ListGroupItem>
            <ListGroupItem>
                Yay! No Meetings today!
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card className="" style={style}>
          <ListGroup flush >
            <ListGroupItem className="bg-primary text-white text-center">
              <h2 className="h5">The Next day</h2>
            </ListGroupItem>
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
        </Card>

      </div>
    );
  }
}
