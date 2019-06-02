import React, { Component, Fragment } from 'react';

import { Container } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import UpcomingMeetings from './UpcomingMeetings';
import CreateMeeting from './CreateMeeting';
import Meeting from './Meeting';
import PastMinutes from './PastMinutes';

import MeetingNav from '../components/MeetingNav';

class App extends Component {
  render() {
    return (

      <div>
        <MeetingNav />

        <Container className="mb-4 mt-2">
          <Router>
            <Fragment>
              <div>
                <Route exact path="/" component={UpcomingMeetings} />
                <Route exact path="/minutes" component={PastMinutes} />
                <Route exact path="/create" component={CreateMeeting} />
                <Route exact path="/m/:id" component={Meeting} />
              </div>
            </Fragment>
          </Router>

        </Container>
      </div>

    );
  }
}

export default App;
