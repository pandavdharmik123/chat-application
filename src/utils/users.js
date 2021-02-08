const users = []

const addUser = ({ id, username, room }) => {

    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the usrname and room
    if(!username || !room){
        return {
            error: 'Username and room is required!'
        }
    }

    //check the username is exist in room?
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //If user is in room then validate it.
    if(existingUser){
        return {
            error: 'Username is already in use!'
        }
    }

    //Stre the user
    const user = { id, username, room }
    users.push(user)
    return {
        user
    }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) =>{
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}