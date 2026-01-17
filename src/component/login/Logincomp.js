import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'

export const Logincomp = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-info text-center">Client Login</h2>
          <hr />

          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-start w-100">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-start w-100">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button type="submit" variant="info" className="w-100">
              Login
            </Button>
          </Form>

          <hr />
          <div className="text-center">
            <a href="#!">Forgot Password?</a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
