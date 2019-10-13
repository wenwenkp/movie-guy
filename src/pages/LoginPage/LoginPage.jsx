import React from 'react';
import userService from '../../utils/userService';

class LoginPage extends React.Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            alert('Invalid Credentials!');
        }
    }

    isFormInvalid() {
        return !(this.state.email && this.state.pw);
    }

    render() {
        return (
            <div className="login">
                <div className="login__box">
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="form__group">
                            <input type="email" id="email" className="form__input" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                            <label htmlFor="email" className="form__label">Email</label>
                        </div>
                        <div className="form__group">
                            <input type="password" id="pw" className="form__input" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                            <label htmlFor="pw" className="form__label">Password</label>
                        </div>
                        <div className="form__group">
                            <button className="button button--white" disabled={this.isFormInvalid()}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;