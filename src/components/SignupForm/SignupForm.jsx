import React from 'react';
import userService from '../../utils/userService';

class SignupForm extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
            this.props.updateMessage('');
            this.setState({
              [e.target.name]: e.target.value
            });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userService.signup(this.state);
          this.props.handleSignupOrLogin();
          this.props.history.push('/');
        } catch (err) {
          this.props.updateMessage(err.message);
        }
      }

    isFormInvalid() {
            return !(this.state.username && this.state.email && this.state.password === this.state.passwordConf && this.state.password &&this.state.passwordConf);
    }

    render() {
        return (
            <div className="login">
            <div className="login__box">
                <form onSubmit={this.handleSubmit} className="form">
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Username" id="username" value={this.state.username} name="username" onChange={this.handleChange} />
                            <label htmlFor="username" className="form__label">Username</label>

                        </div>
                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="Email" id="email" value={this.state.email} name="email" onChange={this.handleChange} />
                            <label htmlFor="email" className="form__label">Email</label>

                        </div>
                        <div className="form__group">
                            <input type="password" className="form__input" placeholder="Password" id="password" value={this.state.password} name="password" onChange={this.handleChange} />
                            <label htmlFor="password" className="form__label">Password</label>

                        </div>
                        <div className="form__group">
                            <input type="password" className="form__input" placeholder="Confirm Password" id="passwordConf" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                            <label htmlFor="passwordConf" className="form__label">Confirm Password</label>

                        </div>
                        <div className="form__group">
                            <button className="button button--white" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                        </div>
                </form>
            </div>
            </div>
        );
    }
}

export default SignupForm;