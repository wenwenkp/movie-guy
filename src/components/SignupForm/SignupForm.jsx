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
            return !(this.state.username && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div className="mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Name" value={this.state.username} name="username" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4">
                            <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4 justify">
                            <button className="btn btn-outline-info" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;