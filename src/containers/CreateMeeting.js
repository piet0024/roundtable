import React from 'react';

import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

export default class CreateMeeting extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="title" className="mr-sm-2">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Weekly Team Meeting" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="objective" className="mr-sm-2">Objective</Label>
            <Input type="textarea" name="objective" id="objective" placeholder="What is the desired outcome of this meeting?" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="location" className="mr-sm-2">Location</Label>
            <Input type="text" name="location" id="location" placeholder="Where?" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="participants" className="mr-sm-2">Participants (fancy input)</Label>
            <Input type="text" name="participants" id="participants" placeholder="Imagine a neat input that finds colleagues" />
          </FormGroup>
          
          <FormGroup inline>
            <Label for="sdate">Start Date</Label>
            <Input type="date" name="sdate" id="sdate" placeholder="sdate" />
          </FormGroup>
          <FormGroup inline>
            <Label for="stime">Start Time</Label>
            <Input type="time" name="stime" id="stime" placeholder="stime" />
          </FormGroup>
          
          
          <FormGroup inline>
            <Label for="edate">End Date</Label>
            <Input type="date" name="edate" id="edate" placeholder="edate" />
          </FormGroup>
          <FormGroup inline>
            <Label for="etime">End Time</Label>
            <Input type="time" name="etime" id="etime" placeholder="etime" />
          </FormGroup>
          
          <Button color="primary" block>Create Meeting</Button>
        </Form>
        </CardBody>
        </Card>
      </div>
    );
  }
}
