import React from 'react'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'; 
// import { login } from '../../actions/session_actions';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.newState = Object.assign({}, this.props.information)
        this.state = this.props.information
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    demoUserSignin(demoUser) {
      return e => {
        e.preventDefault();
        this.props.processForm(demoUser)
        // this.props.history.push(`/`)
      }
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm(this.state)
        this.setState(this.newState)
        // this.props.history.push(`/`) // only do this on a successful login / sign up
        
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

    componentWillUnmount() {
      
    }

    render(){
      const {formType, navLink } = this.props

      const demoUser = {
        email: "demo@user.com",
        password: "demouser"
      }
      
      
      const signupFields = () => {
        return(
          <>
            <div className="inputGroup">
              <input 
                type="text" 
                placeholder="Username"
                value={this.state.username }
                onChange={this.update('username')}
                className="formInput"
                />
              <label className="formInputLabel">Username</label>
            </div>
            <br/>
          </>
          )
        }


      return(
          <div className="split left container">
              <form onSubmit={this.handleSubmit} className={"centered"}>
                <h2>
                    <Link to='/' className="signin-logo" >
                        ravebrite
                    </Link>
                </h2>
                <br />
      
                {this.renderErrors()}
                <div className="inputGroup">
                    <input 
                      type="text" 
                      placeholder="Email"
                      value={this.state.email} 
                      onChange={this.update('email')}
                      className="formInput"
                    />
                    <label className="formInputLabel">Email:</label>
                </div>
                <br/>

                {formType === 'Sign up' ? signupFields() : ''}

                <div className="inputGroup">
                    <input 
                      type="password" 
                      placeholder="Password"
                      value={this.state.password} 
                      onChange={this.update('password')}
                      className="formInput"
                    />
                    <label className="formInputLabel">Password:</label>
                </div>
                <br/>
                <input className="formButton" type="submit" value={formType}/>
                <br />
                {formType === 'Log in' ? 
                  <button 
                    onClick={this.demoUserSignin(demoUser)}
                    className="inputGroup formButton"  
                  >Demo User</button> : ''
                  }
                
              </form>
          </div>
      )
    }
}

export default SessionForm

// don't make ali mad w css design choices or else