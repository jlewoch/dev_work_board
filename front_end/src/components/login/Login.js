import React, { Component } from 'react'
import FormInput from '../../shared_components/form_input/FormInput'
import './login.css'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userNameInput: '',
      passwordInput: ''
    }
  }
  changeHandler = e => {
    console.log(e.target.id, this.state)
    this.setState({ [e.target.id]: e.target.value })
  }

  render () {
    const { userNameInput, passwordInput } = this.state
    return (
      <div className='page'>
        <div className='login'>
          <div className='login-form'>
            <div className='login-form-top'>
              <h2 className='app-title'>WORKBOARD LOGIN</h2>
            </div>
            <div className='login-form-middle'>
              <FormInput
                label='Username'
                type='text'
                onChange={this.changeHandler}
                id='userNameInput'
                value={userNameInput}
              />
              <FormInput
                label='Password'
                type='password'
                onChange={this.changeHandler}
                id='passwordInput'
                value={passwordInput}
              />
            </div>
            <div className='login-form-bottom'>
              <button
                className='button-style'
                disabled={userNameInput === '' || passwordInput === ''}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
