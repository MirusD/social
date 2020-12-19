let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 5},
            {id: 2, message: "Я изучаю react", likesCount: 5},
            {id: 2, message: "У меня получается!", likesCount: 5}
          ],
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Rasim'}, 
            {id: 2, name: 'Dima'}, 
            {id: 3, name: 'Andrey'}, 
            {id: 4, name: 'Victor'}, 
            {id: 4, name: 'Elena'}, 
          ],
        messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'how are you'}, 
            {id: 3, message: 'goodbay'}, 
            {id: 4, message: 'fdsfdsf'}, 
          ]
    }
}

export default state