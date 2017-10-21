const io = require('socket.io')();



io.on('connection', client => {
    client.on('room', room => {
        client.join(room);
        io.in(room).emit('message', 'Welcome to the Jungle')

        client.on('message', msg => {
            io.in(room).emit('message', msg)
        })
    });

    client.on('leave room', (room) => {
        console.log('Client left')
        client.leave(room)
    })
});

io.listen(3500);

console.log('Chat Server Runningon Port: 3500')