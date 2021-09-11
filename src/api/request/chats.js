import { db } from '../firebase';

export const chatsApi = {
    create: (title) => {
        return db.ref('chats').push({
            title
        })
    },

    delete: (id) => {
        db.ref('chats').child(id).remove();
        //db.ref('messages').child(id).remove();
    },

    getList: (callback) => {
        db
            .ref('chats')
            .on('value', (snapshot) => {
                const chats = []
                snapshot.forEach((snap) => {
                    chats.push({
                        id: snap.key,
                        ...snap.val(),
                    })
                })
                callback(chats)
            })
    },
}