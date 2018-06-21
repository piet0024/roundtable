import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CreateMeeting extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleTitle" className="mr-sm-2">Title</Label>
            <Input type="text" name="title" id="exampleTitle" placeholder="Weekly Team Meeting" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleDescription" className="mr-sm-2">Description</Label>
            <Input type="text" name="description" id="exampleDescription" placeholder="Descript" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
