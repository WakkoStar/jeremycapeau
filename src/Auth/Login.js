import React from "react";
import API from "../utils/API";

export class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    send = async () => {
        const { email, password } = this.state;
        if (!email || email.length === 0) {
            return;
        }
        if (!password || password.length === 0) {
            return;
        }

        await API.login(email, password)
        window.location = "/dashboard";

    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="Login" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1>Connexion</h1>
                <label>Email</label>
                    <input type="text" value={email} onChange={this.handleChange} id="email"/>
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={this.handleChange} id="password" />
                    <input style={{marginTop: "2vw"}} onClick={this.send} type="submit" value="Connexion" />
            </div>
        );
    }
}
