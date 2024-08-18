


import { React, useEffect, useState, useMemo } from 'react'
import { io } from 'socket.io-client';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';

const MainPage = () => {
  const socket = useMemo(() => io('http://192.168.0.104:4000'), []);

  const [message, setMessage] = useState('');
  const [room , setRoom] = useState('');
  const [socketId, setSocketId] = useState('');
  const [allMessages, setAllMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', {message, room});
    setMessage('');
  }

  useEffect(() => {
    socket.on('connect', () => {
      setSocketId(socket.id);
      console.log('Connected to server: ', socket.id);
    });

    socket.on('recieve-message', (msg) => {
      console.log(msg);
      setAllMessages((allMessages) => [...allMessages, msg]);
    });

    return () => {
      socket.disconnect();
    }
  }, []);
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component='div' gutterBottom>
        Welome to Chat App
      </Typography>

      <Typography variant="h6" component='div' gutterBottom>
        {socketId}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={e => setMessage(e.target.value)}
          id="outlined-basic"
          autoComplete='off'
          label="Type a message"
          variant="outlined"
          />

          <TextField
          value={room}
          onChange={e => setRoom(e.target.value)}
          id="outlined-basic"
          autoComplete='off'
          label="Room"
          variant="outlined"
          />

        <Button variant="contained" color="primary" type='submit'>
          Send
        </Button>
      </form>
      <Stack>
        {allMessages.map((msg, index) => (
          <Typography key={index} variant="h6" component='div' gutterBottom>
            {msg}
          </Typography>
        ))}
      </Stack>
    </Container>
  )
}

export default MainPage;
