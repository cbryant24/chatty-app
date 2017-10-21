import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_room_list } from '../actions';

class Chat extends Component {
    constructor(props) {
        super(props);

        // this.socket = openSocket('http://localhost:3500');

        // this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        // this.socket.on('chat message', msg => {
        //     console.log('Message Received:', msg);
        // })

        this.props.get_room_list();
    }

    sendMessage() {
        this.socket.emit('chat message', 'Hello hard coded');
    }

    render() {
        console.log('these be the rooms props:', this.props.rooms)

        const  rooms_list = this.props.rooms.map( (room, idx) => {
            return (
                <li key={idx} className='collection-item avatar'>
                    <i className='circle green'></i>
                    <Link to={`/chat/${ room._id }`} className='title'>{room.name}</Link>
                </li>
            )
        })
        return (
            <div>
                <h1>Chat Lobby</h1>
                <ul className='collection'>
                    {rooms_list}
                </ul>
                {/* {<button onClick={this.sendMessage} className='btn btn-large'>Send Message</button>} */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.chat.rooms
    }
}

export default connect(mapStateToProps, { get_room_list })(Chat);