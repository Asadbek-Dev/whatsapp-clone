import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, InsertEmoticonOutlined, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import '../style/Chat.css'
import db from '../firebase';

const Chat = () => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>> ', input);
        setInput('');
    }



    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>

                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className='chat__name'>Asadbek</span>
                    Hey Guys
                    <span className='chat__timestamp'>11:12pm</span>
                </p>
            </div>
            <div className='chat__footer'>
                <InsertEmoticonOutlined />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Type a message' />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
