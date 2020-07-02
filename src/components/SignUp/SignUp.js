import React, { Component } from 'react'

import { signUp, signIn } from '../../api/auth'

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
    event.preventDefault()

    const { alert, history } = this.props

    signUp(this.state)
      .then(() => alert({
        heading: 'Sign Up Success',
        message: 'yay',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert({
          heading: 'Sign Up Failed',
          message: 'yay',
          variant: 'danger'
        })
      })
  }
}

export default SignUp
