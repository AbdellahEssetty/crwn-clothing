import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event => {
        // console.log(event.target);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return <div className="sign-in">

            <h2>I already have an account</h2>
            <span>Sign in with your email adress</span>

            <form action="" onSubmit={this.handleSubmit}>
                <FormInput  type="email"
                        name="email"
                        id="email"
                        handleChange={this.handleChange}
                        label="email"
                        value={this.state.email} required/>

                <FormInput  type="password"
                        name="password"
                        id="password" 
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password} required/>

                <CustomButton type="submit" >Sign in</CustomButton>
            </form>

        </div>
    }
};


export default SignIn;