import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Form, FormGroup, Label, Input
} from 'reactstrap';

export default class MeetingComments extends React.Component {
  render() {
    return (
      <div>
        <h2 className="h3">Comments for {this.props.id}</h2>
        <Form>
          <FormGroup>
            <Label for="exampleText">Your Comment</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button color="primary" block>Submit</Button>
        </Form>
      </div>
    );
  }
}

MeetingComments.propTypes = {
  id: PropTypes.string.isRequired,
};
