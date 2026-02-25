const sessionIdUserMap = new Map();

// this create a map object in js




function setUser(id,user){
    sessionIdUserMap.set(id,user)

}

// this function set  or store user data using sessionid  as key
// like this setUser("abc123", { id: 1, name: "Akash" })


function getUser(id){
    return sessionIdUserMap.get(id)
}

// if user sends session id return user date
// ex getUser("abc123")
// { id: 1, name: "Akash" }


module.exports={
    setUser,getUser
}