/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const Cart = () => {
  return (
    <Container>
      <Row>
        <Col>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart