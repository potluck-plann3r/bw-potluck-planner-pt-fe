import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions';
import img from '../img/undraw_tasting_de22.svg';
import './index.scss';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regData: { firstName: null, lastName: null, email: null, password: null },
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      passwordsMatch: false,
      emailsMatch: false,
      isLogginActive: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.register(this.state.regData);
      console.log(`
      --SUBMITTING--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
    `);
      alert('Account Created');
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    let testing = { ...this.state.regData };
    switch (name) {
      case 'firstName':
        formErrors.firstName =
          value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'lastName':
        formErrors.lastName =
          value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'invalid email address';
        break;
      case 'password':
        formErrors.password =
          value.length < 6 ? 'minimum 6 characaters required' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () =>
      console.log(this.state.formErrors)
    );
    this.setState({
      regData: {
        ...this.state.regData,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <h1 className="header">Create Account</h1>
        <div className="content">
          <div className="image">
            <img src={img} />
          </div>
          <form className="form" onSubmit={this.handleSubmit} noValidate>
            <div className="firstName form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? 'error' : null}
                type="text"
                placeholder="First name"
                name="firstName"
                value={this.state.username}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? 'error' : null}
                type="text"
                placeholder="Last name"
                name="lastName"
                value={this.state.username}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? 'error' : null}
                type="text"
                placeholder="E-mail"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? 'error' : null}
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <button className="btn footer">Get started!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    register
  }
)(Registration);
