/*
import React from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import API from "../utils/API";

export class Signup extends React.Component {
    state = {
        email: "",
        password: "",
        cpassword: ""
    };
    send = async () => {
        const { email, password, cpassword } = this.state;
        if (!email || email.length === 0) return;
        if (!password || password.length === 0 || password !== cpassword) return;
        try {
            const { data } = await API.signup({ email, password });
            localStorage.setItem("token", data.accessToken);
            window.location = "/dashboard";
        } catch (error) {
            console.error(error);
        }
    };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        const { email, password, cpassword } = this.state;
        return (
            <div className="Login">
                <FormGroup controlId="email" bsSize="large">
                    <label>Email</label>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <label>Password</label>
                    <FormControl
                        value={password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <FormGroup controlId="cpassword" bsSize="large">
                    <label>Confirm Password</label>
                    <FormControl
                        value={cpassword}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button onClick={this.send} block bsSize="large" type="submit">
                    Inscription
                </Button>
            </div>
        );
    }
}
*/
