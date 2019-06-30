import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import Home from './components/Home';
import FriendList from './components/FriendList';
import Form from './components/Form';


class App extends React.Component {
    // constructor() {
    //   super();
          state = { 
          friends: []
       };

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
          .then( (response) => {
            console.log(response)
            this.setState({ friends: response.data });
          })
          .catch( (err) => {
            console.log('Error', err)
          })  
    }

    updateFriend = (friends) => {
        this.setState({ friends })
    }

    render() {
      const {friends } =this.state;

      return (
        <div className="App">
            <nav>
                <h1 className="list-header">My Friends</h1>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/FriendList">Friends List</Link>
                        <Link to="/form">Add a Friend</Link>
                    </div>
              </nav>
            
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route path="/friendList" render={(props) => <FriendList {...props} friends={this.state.friends} />} />
            <Route path="/form" render={(props) => <Form {...props} updateFriend={this.updateFriend} />} />           
        </div>
      );
    }
  } 

export default App;
