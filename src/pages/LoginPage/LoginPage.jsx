import React from 'react';
import userService from '../../utils/userService';

class LoginPage extends React.Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
        // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            // // Let <App> know a user has signed up!
            this.props.handleSignupOrLogin();
            // // Successfully signed up - show GamePage
            this.props.history.push('/');
        } catch (err) {
            // Use a modal or toast in your apps instead of alert
            alert('Invalid Credentials!');
        }
    }

    render() {
        return (
            <div className="mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row mt-3 justify-content-md-center">
                        <div className="col-md-4 justify">
                            <button className="btn btn-outline-info">Login</button>&nbsp;&nbsp;
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;