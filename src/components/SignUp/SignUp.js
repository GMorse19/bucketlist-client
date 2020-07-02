import React, { Component } from 'react'

import { signUp, signIn } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
  constructor () {
    super ()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    console.log(this.state)
    event.preventDefault()

    // const { history } = this.props

    signUp(this.state)
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
      })
  }

  render () {
  const { email, password, passwordConfirmation } = this.state

  return (
    <div className="popup2">
      <div className="mt-3 p-4">
        <h3>Sign Up</h3>
        <Form onSubmit={this.onSignUp}>
          <Form.Group controlId="email" className="mt-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              autoComplete='off'
              className="account-info input"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
              maxLength="35"
            />
          </Form.Group>
          <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                className="account-info password input"
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                maxLength="20"
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                required
                className="account-info password input"
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </Form.Group>
          <Button
              type="submit"
              className='submit-button'
            >
              Submit
            </Button>
          </Form>
        </div>
       </div>
     )
   }
}

export default SignUp
