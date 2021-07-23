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
        this.props.history.push(`/quiz`)
      }
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm(this.state)
        this.setState(this.newState)
        // this.props.history.push(`/quiz`) // only do this on a successful login / sign up
    }


    renderErrors() {
      // debugger 
        return(
          <ul>
            {this.props.errors.email}
            <br/>
            {this.props.errors.username}
            <br/>
            {this.props.errors.password}
            <br/>
            {this.props.errors.password2}
            <br/>
          </ul>
        )
        }


    changeButtonColor() {
      if (document.getElementById("changeColorEmail").value !== "" && document.getElementById("changeColorPassword").value !== '') {
        document.getElementById("button").style.background = "skyblue";
      } else {
        document.getElementById("button").style.background = "#cfcfcf";
      }
    }

    render(){
      const {formType, navLink } = this.props

      const demoUser = {
        email: "demo@user.com",
        password: "123456"
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
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Username"}
                />
            </div>
            <br/>
          </>
          )
        }

      const signupPassword = () => {
        return(
          <>
            <div className="inputGroup">
              <input 
                type="password" 
                placeholder="Confirm password"
                value={this.state.password2 }
                onChange={this.update('password2')}
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Confirm password"}
                />
            </div>
            <br/>
          </>
        )
      }


      return(
          <div className="splash-container">
              <form onSubmit={this.handleSubmit} className="session-form">
                <h2 className='logo'>
                  <img 
                    src="https://cdn.discordapp.com/attachments/844198011239923724/867901223784939570/VIBE_LOGO-C.png" 
                    alt="vibelogo" 
                    className='session-logo'
                  />
                </h2>
                <br />
      
                {this.renderErrors()}
                {formType === 'Sign up' ? signupFields() : ''}
                <div>
                  {/* {this.props.errors.email} */}
                </div>
                <div className="form-input">
                    <input 
                      type="text" 
                      placeholder="Email"
                      value={this.state.email} 
                      onChange={this.update('email')}
                      onFocus={(e) => e.target.placeholder = ""} 
                      onBlur={(e) => e.target.placeholder = "Email"}
                      id='changeColorEmail'
                      onKeyUp={() => this.changeButtonColor()}
                    />
                </div>
                <br/>


                <div className="form-input">
                    <input 
                      type="password" 
                      placeholder="Password"
                      value={this.state.password} 
                      onChange={this.update('password')}
                      onFocus={(e) => e.target.placeholder = ""} 
                      onBlur={(e) => e.target.placeholder = "Password"}
                      id='changeColorPassword'
                      onKeyUp={() => this.changeButtonColor()}
                    />
                </div>
                <br/>
                
                {formType === 'Sign up' ? signupPassword() : ''}

                <input className="formButton" type="submit" value={formType} id='button' />
                <br />
                {formType === 'Log in' ? 
                  <>
                    <button 
                      onClick={this.demoUserSignin(demoUser)}
                      className="inputGroup formButton demo"
                      >Demo User
                    </button> 
                    <br />
                  </>
                    : ''
                  }
                
                Already a user? {this.props.navLink}
              </form>
          </div>
      )
    }
}

export default SessionForm

