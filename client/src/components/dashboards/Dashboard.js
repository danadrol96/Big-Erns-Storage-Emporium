import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import { Container } from 'react-bootstrap';

class Dashboard extends Component {

  renderDashboard() {
    switch(this.props.auth) {
      case null:
        return;
      default:
        if (this.props.auth.admin) {
          return <AdminDashboard />
        } else {
          return <UserDashboard />
        }
    }
  }

  render() {
    return (
      <Container fluid>
        {this.renderDashboard()}
      </Container>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(Dashboard);