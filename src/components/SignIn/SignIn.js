import React, { Component } from 'react'

import { signIn } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  constructor () {
    super ()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    console.log(this.state)
    event.preventDefault()

    signIn(this.state)
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
      })
  }

  render () {
  const { email, password } = this.state

  return (
    <div className="popup2">
      <div className="mt-3 p-4">
        <h3>Sign In</h3>
        <Form onSubmit={this.onSignIn}>
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

export default SignIn
