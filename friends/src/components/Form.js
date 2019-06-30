import React from "react";
import axios from "axios";

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    newFriend = (event) => {
        event.preventDefault()

        const { name, age, email } = this.state
        const payload = { name, age, email } 
        
        axios.post("http://localhost:3000/friends", payload)
            .then(response => {
                this.props.updateFriend(response.data)
                this.setState({
                    
                })
            })
            .catch(err => {
                this.setState({
                  
                })
            });
    }

    render() {
        const { name, age, email } = this.state


        return (
            <div>
                <form onSubmit={this.newFriend}>
                    <h1>Add a new friend</h1>

                    <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="Email Address" value={email} onChange={this.handleChange} />
                    <input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                    <input type="submit" value="Submit" onChange={this.handleChange} />
                </form>

            </div>
            
        )

    }

}

export default Form;