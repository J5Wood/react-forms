import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData.js'

export default class ParentComponent extends Component {

    state = {
        firstName: "",
        lastName: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleFirstNameChange = event => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    
    // handleLastNameChange = event => {
    //     this.setState({
    //       lastName: event.target.value
    //     })
    // }

    render() {
        return (
        <div>
            <Form
            formData={this.state}
            handleChange={this.handleChange}
            // handleFirstNameChange={this.handleFirstNameChange}
            // handleLastNameChange={this.handleLastNameChange}
            />
            <DisplayData formData={this.state} />
        </div>
        )
    }
}
