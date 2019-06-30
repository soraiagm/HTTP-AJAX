import React from "react";
import axios from "axios";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: this.friends,
        }
    }



    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
    }

    axios.post(`http://localhost:5000/friends`, newFriend)
        .then (response => {
            console.log(response.data);
            // return response.data;
            this.props.state.setState({ friends: response.data })
        })

    }   

    
    render () {
        return (
            <form onSubmit={this.handlSubmit}>
                <h2>Add friend:</h2>

                <input type="text" id="name" placeholder="name" onChange={this.handleChange} />
                <input type="number" id="age" placeholder="age" onChange={this.handleChange} />
                <input type="email" id="email" placeholder="email" onChange={this.handleChange} />
                <br></br>
                <button type='submit'>Add</button>
            </form>
        )
    }

} 

export default Form;


// newFriend = (event) => {
    //     event.preventDefault()

    //     const { name, age, email } = this.state
    //     const payload = { name, age, email } 
        
    //     axios.post("http://localhost:3000/friends", payload)
    //         .then(response => {
    //             this.props.updateFriend(response.data)
    //             this.setState({
                    
    //             })

    //             this.props.history.push("/friendList")
    //         })
    //         .catch(err => {
    //             this.setState({
                  
    //             })
    //         });
    //  }

//     render() {
//         const { name, age, email } = this.state


//         return (
//             <div>
//                 <form onSubmit={this.newFriend}>
//                     <h1>Add a new friend</h1>

//                     <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
//                     <input type="text" name="email" placeholder="Email Address" value={email} onChange={this.handleChange} />
//                     <input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
//                     <input type="submit" value="Submit" onChange={this.handleChange} />
//                 </form>

//             </div>
            
//         )

//     }

// }
