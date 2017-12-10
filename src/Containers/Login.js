import React from 'react'
import auth from '../auth'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.state = { redirectToRefer: false }
  }
  async login() {
    try {
      await auth.authenticate()
      this.setState({ redirectToRefer: true })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.state.redirectToRefer) {
      return <Redirect to={from} />
    }
    return (
      <div>
        <button onClick={this.login}>click me to login</button>
      </div>
    )
  }
}
